<template>
    <div id='app'>
        <img id='logo' alt='ZipFoods logo' src='./assets/images/zipfoods-logo.png' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link exact :to='paths[link]'>{{ link }}</router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
import { products } from './products.js';
export default {
    name: 'app',
    components: {},
    data: function() {
        return {
            products: products,
            // src/App.vue data properties
            links: ['home', 'products', 'categories'],
            paths: {
                home: '/',
                products: '/products',
                categories: '/categories'
            }
        };
    }
};
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>