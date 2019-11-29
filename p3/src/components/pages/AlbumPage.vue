<template>
    <div id='album-page' v-if='album'>
        <h1>{{ album.name }}</h1>
        <img
            v-if='album.id'
            class='album-thumb'
            :alt='"Album image of  " + album.name'
            :src='"./../../assets/images/" + album.id + ".jpg"'
        />
        <div class='artist'>{{ album.artist }}</div>
        <p class='description'>{{ album.description }}</p>

        <ul>
                <li v-for='(song,id) in album.songlist' :key='id'>{{ song }}</li>
            </ul>

        <button @click='addToLike(album.id)'>Add to like</button>

        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Your like have been updated!</div>
        </transition>

        <router-link :to='"/albums"'>&larr; Return to all albums</router-link>
    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'AlbumPage',
    props: ['id'],
    data: function() {
        return {
            album: null,
            albums: null,
            addAlert: false
        };
    },
    mounted() {
        app.axios
            .get(app.config.api + this.id)
            .then(response => {
                this.album = response.data;
            });
    },
    methods: {
        addToLike: function(albumId) {
            let like = new app.Like();
            like.add(albumId);
            this.addAlert = true;
            setTimeout(() => (this.addAlert = false), 2000);
        }
    }
};
</script>

<style scoped>
</style>
