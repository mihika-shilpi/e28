<template>
    <div id='album-page' v-if='album'>

      <div uk-grid>

        <div class="uk-card uk-width-1-3">
          <img
              v-if='album.id'
              class='album-thumb'
              :alt='"Album image of  " + album.name'
              :src='"./../../assets/images/" + album.id + ".jpg"'
          />

          <button data-test='add-to-favourites-button' @click='addToFavourites(album.id)' class="uk-button uk-button-primary uk-margin"> <span uk-icon="icon: heart"></span> Favourite </button>

          <transition name='fade'>
            <div class='uk-alert-success' v-if='addAlert'>Your favourite has been updated!</div>
        </transition>

        </div>

        <div class="uk-card uk-width-2-3">

        <h1 data-test="album-name" class="uk-heading-divider">{{ album.name }}</h1>

        <h3 class='uk-heading-small'>{{ album.artist }}</h3>
        <p class='description'>{{ album.description }}</p>

<h3 class='uk-heading-small'>Track List</h3>
        <ul class="uk-list uk-list-divider">
          <li v-for='(song,id) in album.songlist' :key='id'>{{ song }}</li>
      </ul>

        </div>

      </div>

      </div>

</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'AlbumPage',
    props: ['id'],
    data: function() {
        return {
            addAlert: false
        };
    },
    computed: {
        album: function() {
            return this.$store.getters.getAlbumByID(this.id);
        }
    },
    mounted() {},
    methods: {
        addToFavourites: function(albumId) {
            let favourites = new app.Favourite();
            favourites.add(albumId);
            this.$store.commit('setFavouritesCount', favourites.count());
            this.addAlert = true;
            setTimeout(() => (this.addAlert = false), 2000);
        }
    }
};
</script>

<style scoped>
</style>
