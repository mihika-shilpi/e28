import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import AlbumsPage from './components/pages/AlbumsPage.vue';
import HomePage from './components/pages/HomePage.vue';
import AlbumPage from './components/pages/AlbumPage.vue';
import LikePage from './components/pages/LikePage.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/albums', component: AlbumsPage, name: 'albums' },
    { path: '/album/:id', component: AlbumPage, name: 'album', props: true },
    { path: '/like', component: LikePage, name: 'like' }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
