<template>
    <div id='like-page'>
        <h1>Your Like</h1>

        <div v-if='items.length == 0'>No items</div>

        <ul v-else-if='albums.length > 0' class='cleanList'>
            <li v-for='item in items' :key='item.id'>
                <button @click='removeFromLike(item.id)'>Remove</button>
                {{ getAlbumDetails(item.id)['name'] }}
            </li>
        </ul>
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
