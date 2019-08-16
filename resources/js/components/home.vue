<template>
    <div>
        <navbar></navbar>
        <div class="container mt-3">
            <div class="columns is-gapless">
                <div class="column">
                    <div class="has-background-white is-radius p-2">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img class="is-circle" src="logo.jpg" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{ getUser.name }}</p>
                                <p class="subtitle is-6 has-text-danger">{{ getUser.email }}</p>
                            </div>
                        </div>
                        <div class="content p-3 ml-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                        <aside class="menu ml-5">
                            <p class="menu-label">
                                General
                            </p>
                            <ul class="menu-list">
                                <li>
                                    <a>
                                        <span class="icon is-small mr-2">
                                            <i class="fas fa-address-card has-text-grey-lighter pt-1" aria-hidden="true"></i>
                                        </span>
                                        <span>View Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span class="icon is-small mr-2">
                                            <i class="fas fa-user-friends has-text-grey-lighter pt-1" aria-hidden="true"></i>
                                        </span>
                                        <span>Friends</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span class="icon is-small mr-2">
                                            <i class="fas fa-info-circle has-text-grey-lighter pt-1" aria-hidden="true"></i>
                                        </span>
                                        <span>Info</span>
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div class="column is-6 ml-3">
                    <div class="has-background-white is-radius p-2 mb-3">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="logo.jpg" alt="Image" class="is-rounded">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <div>
                                        <strong>John Smith</strong> <small class="has-text-danger">@johnsmith</small> <small>31m</small>
                                        <div class="field mt-2">
                                            <div class="control mb-2">
                                                <textarea class="textarea is-danger" placeholder="Write something here..." rows="2"></textarea>
                                            </div>
                                            <div class="file is-right">
                                                <label class="file-label">
                                                    <input class="file-input" type="file" name="resume">
                                                    <span class="file-cta">
                                                        <span class="file-icon">
                                                            <i class="fas fa-upload"></i>
                                                        </span>
                                                        <span class="file-label">
                                                            Choose an Image…
                                                        </span>
                                                    </span>
                                                    <a class="button is-danger ml-2 is-rounded">Create Post</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="has-background-white is-radius p-2 mb-3">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="logo.jpg" alt="Image" class="is-rounded">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>John Smith</strong> <small class="has-text-danger">@johnsmith</small> <small>31m</small>
                                        <br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                    </p>
                                </div>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <a class="level-item" aria-label="like">
                                            <span class="icon is-small">
                                                <i class="fa has-text-grey-lighter is-hover-pink fa-heart"></i>
                                            </span>
                                        </a> <span>123</span>
                                        <a class="level-item pl-3" aria-label="retweet">
                                            <span class="icon is-small">
                                                <i class="fa has-text-grey-lighter is-hover-blue fa-retweet"></i>
                                            </span>
                                        </a> <span>34</span>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                    <div class="has-background-white is-radius p-2 mb-3">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="logo.jpg" alt="Image" class="is-rounded">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>
                                            John Smith
                                        </strong> <small class="has-text-danger">@johnsmith</small> <small>31m</small>
                                        <br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        <img class="mt-3 is-radius" src="willsmith.jpg" alt="">
                                    </p>
                                </div>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <a class="level-item" aria-label="like">
                                            <span class="icon is-small">
                                                <i class="fa has-text-grey-lighter is-hover-pink fa-heart"></i>
                                            </span>
                                        </a> <span>123</span>
                                        <a class="level-item pl-3" aria-label="retweet">
                                            <span class="icon is-small">
                                                <i class="fa has-text-grey-lighter is-hover-blue fa-retweet"></i>
                                            </span>
                                        </a> <span>34</span>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                    <div class="has-background-white is-radius p-2 mb-3">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="logo.jpg" alt="Image" class="is-rounded">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>John Smith</strong> <small class="has-text-danger">@johnsmith</small> <small>31m</small>
                                        <img class="mt-3 is-radius" src="willsmith.jpg" alt="">
                                    </p>
                                </div>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <a class="level-item" aria-label="like">
                                            <span class="icon is-small">
                                                <i class="fa has-text-grey-lighter is-hover-pink fa-heart"></i>
                                            </span>
                                        </a> <span>123</span>
                                        <a class="level-item pl-3" aria-label="retweet">
                                            <span class="icon is-small">
                                                <i class="fa has-text-grey-lighter is-hover-blue fa-retweet"></i>
                                            </span>
                                        </a> <span>34</span>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="column ml-3">
                    <div class="has-background-white is-radius p-2">
                        <aside class="menu">
                            <p class="menu-label">
                                Friends
                            </p>
                            <ul class="menu-list">
                                <li><a>
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img class="is-circle" src="logo.jpg" alt="Placeholder image">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-6 pt-1">John Smith</p>
                                                <p class="subtitle is-6 has-text-danger">@johnsmith</p>
                                            </div>
                                            <div class="media-right center-online">
                                                <i class="fa fa-toggle-on has-text-success"></i>
                                            </div>
                                        </div>
                                    </a></li>
                                <li><a>
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img class="is-circle" src="logo.jpg" alt="Placeholder image">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-6 pt-1">John Smith</p>
                                                <p class="subtitle is-6 has-text-danger">@johnsmith</p>
                                            </div>
                                            <div class="media-right center-online">
                                                <i class="fa fa-toggle-on has-text-grey-lighter"></i>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import navbar from './inc/navbar'

export default {
    components: {
        navbar
    },
    computed: {
        ...mapGetters(['getUser']),
    },

    created() {
        this.$store.dispatch('getUserDetails');
    }
}

</script>
