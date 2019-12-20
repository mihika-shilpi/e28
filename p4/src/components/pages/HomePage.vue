<template>

<div id='home-page'>

  <div uk-grid>

    <div class="uk-card uk-width-1-3">
      <img
          :src='"./../../assets/images/malte-wingen-PDX_a_82obo-unsplash.jpg"'
      />

    </div>

    <div class="uk-card uk-width-2-3">

    <p>Made your way to the majestic multitude that is Musical Mayhem? Move closer, settle down and meditate over the mellifluous and mellow moods of our current favourite albums.
Picked by yours truly, Mihika.</p>

<div id='album-suggest' class="uk-margin">
        <h6 style="text-transform:uppercase;">Suggest an Album</h6>
        <form @submit.prevent='handleSubmit'>
                <input
                    class="uk-input"
                    placeholder="Album Name"
                    type='text'
                    :class='{"uk-form-danger": $v.album.name.$error }'
                    id='name'
                    data-test='album-name-input'
                    v-model='$v.album.name.$model'
                />

                <div v-if='$v.album.name.$error'>
                    <div
                        class='uk-alert-warning uk-alert'
                        v-if='!$v.album.name.required'
                    >Album name is required.</div>
                    <div
                        class='uk-alert-warning uk-alert'
                        v-else-if='!$v.album.name.minLength'
                    >Album name must be at least 4 characters long.</div>

                <small class='form-help'>Min: 4</small>
            </div>

            <div class='uk-margin'>
                <input
                    class="uk-input"
                    placeholder="Artist"
                    type='text'
                    :class='{ "uk-form-danger": $v.album.artist.$error }'
                    data-test='album-artist-input'
                    id='artist'
                    v-model='$v.album.artist.$model'
                />
                <div v-if='$v.album.artist.$error'>
                    <div
                        class='uk-alert-warning uk-alert'
                        v-if='!$v.album.artist.required'
                    >Album artist is required.</div>
                </div>
            </div>

            <div class='uk-margin'>
                <textarea
                    class="uk-textarea"
                    placeholder="Description"
                    data-test='album-description-textarea'
                    id='description'
                    v-model='album.description'
                ></textarea>
            </div>

            <button data-test='add-album-button' type='submit' class="uk-button uk-button-default">Suggest Album</button>

            <div class='uk-alert-warning uk-alert' v-if='formHasErrors'>Please complete the form</div>
        </form>
    </div>

    </div>

  </div>

  <div class="uk-card uk-card-default uk-margin">
  <div class="uk-card-body">
  <h2>Today's Suggestion from You</h2>

  <h4>{{suggestion.name}}</h4>
  <p>{{suggestion.artist}}</p>
  <p>{{suggestion.description}}</p>
  </div>
  </div>

  </div>



</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators';

let album = {};
album = {
        name: '',
        artist: '',
        description: '',
    };

export default {
    artist: 'HomePage',
    data: function() {
        return {
            album: album,
            suggestion: '',
            formHasErrors: false
        };
    },
    validations: {
        album: {
            name: {
                required,
                minLength: minLength(4),
            },
            artist: {
                required
            }
        }
    },
    watch: {
        '$v.$anyError': function() {
            this.formHasErrors = this.$v.$anyError;
        }
    },
    methods: {
        handleSubmit: async function() {
            if (!this.formHasErrors) {
                localStorage.setItem('suggestion', JSON.stringify(album));
                this.suggestion =  JSON.parse(window.localStorage.getItem('suggestion'))
                await this.$nextTick()
            }
        }
    }
};

</script>
