<template>
    <button class="bowl uk-button uk-icon-button"
            v-bind:id="'b' + bowlnum" 
            @click="$emit('check', bowlnum)">
            <slot name="coin"></slot>
    </button>
</template>

<script>
export default {
    data: function() {
        return {};
    },
    props: {
        bowlnum: {
        type: Number,
        default: 0
        }
    },
    template: "#bowls-coin"
};
</script>

<style>

.bowl {
  height: 5rem;
  width: 5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: 0.6rem solid rgba(10,10,10,0.2);
  padding: 1.2rem;
  z-index: 10;
}

#b1 {
  background-color: #8A80B9;
}

#b2 {
  background-color: #ED8681;
}

#b3 {
  background-color: #9CCCB7;
}

#b4 {
  background-color: #9DC6E5;
}

#b5 {
  background-color: #E1E47F;
}

#b0 {
    display: none;
}
</style>