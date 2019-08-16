import axios from 'axios'

const state = {
    access_token: localStorage.getItem('access_token') || null,
    user: {}
};

const getters = {
    isLoggedIn: state => {
        return (state.access_token != null)
    },
    getUser: state => {
        return state.user;
    }
};

const actions = {
    async loginUser({ commit }, cred) {
        const response = await axios.post('/api/login', { email: cred.email, password: cred.password }).catch(err => {
            console.log(err);
        });
        localStorage.setItem('access_token', response.data.token);
        commit('setToken', response.data);
    },
    async registerUser({ commit }, cred) {
        const response = await axios.post('/api/register', { name: cred.full_name, email: cred.email, password: cred.password }).catch(err => {
            console.log(err);
        });
        localStorage.setItem('access_token', response.data.token);
        commit('setToken', response.data);
    },
    async logoutUser({ commit }) {
        const response = await axios.get('/api/logout?api_token=' + state.access_token).catch(err => {
            console.log(err);
        });
        localStorage.removeItem('access_token');
        commit('removeToken');
    },
    async getUserDetails({ commit }) {
        const response = await axios.get('/api/user?api_token=' + state.access_token).catch(err => {
            console.log(err);
        });
        state.user = {
            name: response.data.name,
            email: response.data.email
        }
    }
};

const mutations = {
    setToken: (state, data) => {
        state.access_token = data.token;
        state.user = {
            name: data.name,
            email: data.email
        }
    },
    removeToken: (state) => {
        state.access_token = null;
        state.user = {};
    },
}

export default {
    state,
    getters,
    actions,
    mutations
};
