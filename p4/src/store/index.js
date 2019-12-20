import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favouritesCount: 0,
        albums: [],
    },

    mutations: {
       setFavouritesCount(state, payload) {
           state.favouritesCount = payload;
       },
       updateFavouritesCount(state, payload) {
           state.favouritesCount += payload;
       },
       setAlbums(state, payload) {
           state.albums = payload;
       }
   },

   actions: {
        setAlbums(context) {
            app.axios.get(app.config.api).then(response => {

              context.commit('setAlbums', response.data)
            });
        }
    },

      getters: {

        getAlbumByID(state) {
            return function (id) {
                return state.albums.find(album => album.id == id);
            }
        }
    }
})
