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

<ul class="uk-list uk-list-divider">
    <li v-for='link in links' :key='link'>
        <router-link exact :to='{ name: link }'>
            {{ link }}
        </router-link>
    </li>
</ul>

    </div>

  </div>

  </div>

</template>

<script>

export default {
    name: 'HomePage',
    data: function() {
        return {
            links: ['home', 'albums', 'like'],
        };
    },
};

</script>
