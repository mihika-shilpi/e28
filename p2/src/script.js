import Vue from 'vue';
import BowlsCoin from './components/BowlsCoin.vue';

let app = new Vue({
    el: '#app',
    components: {
        'bowls-coin': BowlsCoin
    },
    data: {
        'result': null,
        'results': [],
        'counter': 0,
        'coin': null,
        'attempt': null,
        'score': 0,
    },
    methods: {
        check: function (guess) {
            this.coin = Math.floor(Math.random() * 5 + 1);
            this.attempt = guess;
            this.result = this.coin == this.attempt
            this.results.push(this.result);
            this.counter++;
            this.score = this.results.reduce((a, b) => a + b, 0);
        },
        retry: function() {
            this.coin = null;
            this.attempt = null;
            this.result = null;
        },
    }

})