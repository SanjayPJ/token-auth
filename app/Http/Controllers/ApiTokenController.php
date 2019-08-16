<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\User;

class ApiTokenController extends Controller
{
    /**
     * Update the authenticated user's API token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function update(Request $request)
    {
        $token = Str::random(60);

        $request->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        return ['token' => $token];
    }

    public function update_one(Request $request){
        $token = Str::random(60);

        $user = User::find(1);

        $user->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        return ['token' => $token];
    }

    // Login for API
    public function login(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if ($validator->fails()) {
        	return response()->json(['error' => 'Validation error.'], 422);
        }else{    	
		    $credentials = $request->only('email', 'password');

	        if (Auth::attempt($credentials)) {
	            $token = Str::random(60);

	            $user = User::where('email', $request->email) -> first();

		        $user->forceFill([
		            'api_token' => hash('sha256', $token),
		        ])->save();

		        return ['token' => $token, 'name' => $user->name, 'email' => $user->email];
	        }else{
	        	return response()->json(['error' => 'Unauthenticated.'], 401);
	        }
        }

    }

    //Register for API
    public function register(Request $request){
    	$validator = Validator::make($request->all(), [
    		'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Validation error.'], 422);
        }else{
	        $user =  User::create([
	            'name' => $request->name,
	            'email' => $request->email,
	            'password' => Hash::make($request->password)
	        ]);

	        $token = Str::random(60);

	        $user->forceFill([
	            'api_token' => hash('sha256', $token),
	        ])->save();

	        return ['token' => $token, 'name' => $user->name, 'email' => $user->email];
        }
    }

    //Logout for API
    public function logout(Request $request){
    	$user = auth()->user();
    	$user->forceFill([
		            'api_token' => null,
		        ])->save();
    	return response()->json(['success' => 'Log out successfully.'], 200);
    }
}