<template>
    <div id='like-page' style="width:100%;">

        <h1>Your Like</h1>

        <div v-if='items.length == 0'>No items</div>

        <div v-else-if='albums.length > 0' uk-grid>


            <div v-for='item in items' :key='item.id' class="uk-width-1-2@s uk-width-1-3@m uk-width-1-4@l">
            <router-link :to='{ name: "album", params: {"id" : item.id }}'>
            <div>
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                <img
                    :alt='"Album image of  " + item.name'
                    :src='"./../../assets/images/" + item.id + ".jpg"'
                />
                </div>
                    <div class="uk-card-footer">
                    <button @click='removeFromLike(item.id)' class="uk-button uk-button-default uk-button-small uk-width-1-1">Remove</button>
                    <transition name='fade'>
                      <div class='uk-alert-danger' v-if='addAlert'>Your like has been removed!</div>
                  </transition>

                </div>
            </div>
            </div>
            </router-link>
            </div>
        </div>

    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'LikePage',
    data: function() {
        return {
            items: [],
            like: null,
            albums: []
        };
    },
    methods: {
        getAlbumDetails(albumId) {
            return this.albums.find(({ id }) => id === albumId);
        },
        removeFromLike: function(albumId) {
            this.like.remove(albumId);
        }
    },
    mounted() {
        this.like = new app.Like();

        this.items = this.like.getItems();

        this.albums = app.axios
            .get(app.config.api)
            .then(response => (this.albums = response.data));
    }
};
</script>
