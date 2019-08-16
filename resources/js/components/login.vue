<template>
    <div>
        <navbar></navbar>
        <div class="container mt-3">
            <div class="columns is-gapless">
                <div class="column"></div>
                <div class="column is-6 ml-3">
                    <div class="has-background-white p-4 is-radius p-2 mb-3">
                        <form @submit.prevent="logMeIn(cred)">
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">Email</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control is-expanded">
                                            <input required v-model="cred.email" class="input is-rounded" type="email" placeholder="johndoe@icloud.com">
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">Password</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control is-expanded">
                                            <input required v-model="cred.password" class="input is-rounded" type="password" placeholder="********">
                                        </p>
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
                                                Log In
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="column"></div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from './inc/navbar'
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            cred: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['loginUser']),
        logMeIn(cred) {
            this.$store.dispatch('loginUser', cred).then(() => {
                this.$router.push({ name: "home" });
            })
        }
    },
    components: {
        navbar
    }
}

</script>
