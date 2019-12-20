<template>
    <div id='albums'>
        <h2>Albums</h2>
        <div class="uk-grid-match uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l " uk-grid uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true" >
        <show-album v-for='album in albums' :key='album.id' :album='album'></show-album>
        </div>
    </div>
</template>

<script>

import ShowAlbum from './../ShowAlbum.vue'

export default {
    name: 'AlbumsPage',
    components: { ShowAlbum },
    data: function() {
        return { }
        },
    mounted(){},
    computed: {
        albums: function() {
            return this.$store.state.albums;
        }
    }
};
</script>

<style scoped>
</style>
