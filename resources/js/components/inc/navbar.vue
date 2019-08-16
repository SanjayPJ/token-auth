<template>
    <nav class="navbar is-danger is-primary-gradient is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item has-text-white" :to="{ name: 'home' }">
                    <i class="fa fa-2x fa-square"></i><b class="ml-2 is-size-5">MateSquares</b>
                </router-link>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <div class="field">
                        <div class="control ml-4 my-2 has-icons-right">
                            <input class="input is-danger is-rounded search" type="email" placeholder="Search">
                            <span class="icon is-right">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <a class="navbar-item on-hover-underline bg-light" v-if="isLoggedIn">
                        <img src="logo.jpg" alt="Image" class="is-circle mr-2">
                        <span>John Smith</span>
                    </a>
                    <a class="navbar-item on-hover-underline" v-if="isLoggedIn">Home</a>
                    <a class="navbar-item on-hover-underline" href="find.html" v-if="isLoggedIn">Find Friends</a>
                    <a class="navbar-item on-hover-underline" href="messages.html" v-if="isLoggedIn">Messages</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        </a>
                        <div class="navbar-dropdown is-right">
                            <router-link class="navbar-item" :to="{ name: 'signup' }">Sign up</router-link>
                            <router-link class="navbar-item" :to="{ name: 'login' }">Log in</router-link>
                            <hr class="navbar-divider" v-if="isLoggedIn">
                            <a class="navbar-item" v-if="isLoggedIn" @click.prevent="logMeOut">
                                Log out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['isLoggedIn']),
    },
    methods: {
        logMeOut() {
            this.$store.dispatch('logoutUser').then(() => {
                this.$router.push({ name: "login" });
            })
        }
    }
}

</script>
