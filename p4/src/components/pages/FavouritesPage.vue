<template>
    <div id='favourite-page' style="width:100%;">

        <h1>Your Favourites</h1>

        <div v-if='items.length == 0'>No items</div>

        <div v-else-if='albums.length > 0' uk-grid >


            <div v-for='item in items' :key='item.id' class="uk-width-1-2@s uk-width-1-3@m uk-width-1-4@l">
            <div data-test="favourites-contents">
            <div class="uk-card uk-card-default">
                <router-link :to='{ name: "album", params: {"id" : item.id }}'>
                <div class="uk-card-media-top">
                <img
                    :alt='"Album image of  " + item.name'
                    :src='"./../../assets/images/" + item.id + ".jpg"'
                />
                </div>
                </router-link>
                    <div class="uk-card-footer">
                    <button data-test='remove-from-favourites-button' @click='removeFromFavourite(item.id)' class="uk-button uk-button-default uk-button-small uk-width-1-1">Remove</button>
                </div>
            </div>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'FavouritesPage',
    data: function() {
        return {
            items: [],
            favourites: null,
        };
    },
    methods: {
        getAlbumDetails(albumId) {
            return this.$store.getters.Id(albumId);
        },
        removeFromFavourite: function(albumId) {
            this.favourites.remove(albumId);
            this.$store.commit('setFavouritesCount', this.favourites.count());
        }
    },
    computed: {
        albums: function() {
            return this.$store.state.albums;
        }
    },
    mounted() {
        this.favourites = new app.Favourite();
        this.items = this.favourites.getItems();
    }
};
</script>
