<template>
    <div>
        <navbar></navbar>
        <div class="container mt-3">
            <div class="columns is-gapless">
                <div class="column"></div>
                <div class="column is-7 ml-3">
                    <form @submit.prevent="registerMe">
                        <div class="has-background-white p-4 is-radius p-2 mb-3">
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">First & Last Name</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control is-expanded">
                                            <input v-model="first_name" class="input is-rounded" type="text" placeholder="John">
                                        </p>
                                    </div>
                                    <div class="field">
                                        <p class="control is-expanded">
                                            <input v-model="last_name" class="input is-rounded" type="text" placeholder="Doe">
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">Email</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control is-expanded">
                                            <input v-model="cred.email" class="input is-rounded" type="text" placeholder="johndoe@icloud.com">
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">New Password</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control is-expanded">
                                            <input v-model="cred.password" class="input is-rounded" type="password" placeholder="********">
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label">
                                    <label class="label">Gender</label>
                                </div>
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <label class="radio">
                                                <input type="radio" name="member">
                                                Female
                                            </label>
                                            <label class="radio">
                                                <input type="radio" name="member">
                                                Male
                                            </label>
                                            <label class="radio">
                                                <input type="radio" name="member">
                                                Custom
                                            </label>
                                        </div>
                                        <p class="mt-2"><small>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label">
                                    <!-- Left empty for spacing -->
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <button class="button is-primary is-rounded">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="column"></div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from './inc/navbar'
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            first_name: "",
            last_name: "",
            cred: {
                full_name: "",
                email: "",
                password: "",
            }
        }
    },
    methods: {
        registerMe() {
            this.cred.full_name = this.first_name + " " + this.last_name;
            this.$store.dispatch('registerUser', this.cred).then(() => {
                this.$router.push({ name: "home" });
            })
        }
    },
    components: {
        navbar
    }
}

</script>
