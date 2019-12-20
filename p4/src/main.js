import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import AlbumsPage from './components/pages/AlbumsPage.vue';
import HomePage from './components/pages/HomePage.vue';
import AlbumPage from './components/pages/AlbumPage.vue';
import FavouritesPage from './components/pages/FavouritesPage.vue';
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.config.albumionTip = false

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/albums', component: AlbumsPage, name: 'albums' },
    { path: '/album/:id', component: AlbumPage, name: 'album', props: true },
    { path: '/favouritess', component: FavouritesPage, name: 'favourites' }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app')
