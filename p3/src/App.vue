<template>
    <div id='app' style="width:100%">
    <div uk-sticky class="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed" id="navigation">
        <div class="uk-container uk-container-expand">
        <nav class="uk-navbar">
            <div class="uk-navbar-left">

                <img
            class="uk-margin-small-right"
            :style="{ height:2 + 'rem' }"
            :alt='"Logo"'
            :src='"./assets/images/logo.png"'
        />

            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav uk-visible@m">
                    <li v-for='link in links' :key='link'>
                        <router-link exact :to='{ name: link }'>
                            {{ link }}
                        </router-link>
                    </li>
                </ul>
            <a uk-navbar-toggle-icon href="#offcanvas" uk-toggle class="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon">
            </a>
            </div>
        </nav>
        </div>
    </div>

        <div class="uk-align-center " style="width:100%">

                 <div class="uk-card uk-grid uk-card-body uk-width-10-12">

                 <div uk-grid style="width:100%">
                 <router-view></router-view>
                 </div>

                 </div>

        </div>




    </div>
</template>

<script>
import * as app from './app.js';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

export default {
    name: 'app',
    components: {},
    data: function() {
        return {
            links: ['home', 'albums', 'like'],
        };
    },
    mounted() {
        this.like = new app.Like();
    }
};
</script>

<style lang='css'>
@import "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css";
</style>
