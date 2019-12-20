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

<h2>Today's Suggestion from You</h2>

<h4>{{album.name}}</h4>
<p>{{album.description}}</p>

<div id='album-suggest'>
        <h1>Suggest an Album</h1>
        <form @submit.prevent='handleSubmit'>
                <label for='name'>URL</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.album.slug.$error }'
                    id='slug'
                    data-test='album-slug-input'
                    v-model='$v.album.slug.$model'
                />

                <div v-if='$v.album.slug.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.album.slug.required'
                    >Album URL is required.</div>
                    <div
                        class='form-feedback-error'
                        v-else-if='!$v.album.slug.minLength'
                    >Album URL must be at least 4 characters long.</div>

                <small class='form-help'>Min: 4</small>
            </div>

            <div class='form-group'>
                <label for='name'>Album Name</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.album.name.$error }'
                    data-test='album-name-input'
                    id='name'
                    v-model='$v.album.name.$model'
                />
                <div v-if='$v.album.name.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.album.name.required'
                    >Album name is required.</div>
                </div>
            </div>

            <div class='form-group'>
                <label for='description'>Description</label>
                <textarea
                    data-test='album-description-textarea'
                    id='description'
                    v-model='album.description'
                ></textarea>
            </div>

            <button data-test='add-album-button' type='submit'>Suggest Album</button>

            <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
        </form>
    </div>

    </div>

  </div>

  </div>

</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators';

let album = {};
album = {
        slug: '',
        name: '',
        description: '',
    };

export default {
    name: 'HomePage',
    data: function() {
        return {
            album: album,
            formHasErrors: false
        };
    },
    validations: {
        album: {
            slug: {
                required,
                minLength: minLength(4),
            },
            name: {
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
        handleSubmit: function() {
            if (!this.formHasErrors) {
                localStorage.setItem('suggestion', JSON.stringify(album));
            }
        }
    }
};

</script>
