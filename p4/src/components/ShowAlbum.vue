<template>

    <div class='album'>
        <router-link :to='{ name: "album", params: {"id" : album.id }}'>
        <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
            <img
                :alt='"Album image of  " + album.name'
                :src='"./../assets/images/" + album.id + ".jpg"'
            />
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">{{ album.name }}</h3>
            </div>
        </div>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ShowAlbum',
    props: ['album']
};
</script>

<style scoped>
</style>
