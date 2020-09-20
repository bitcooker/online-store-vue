<template>
  <div>
        <p v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Mens</p>
        <p v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Womans</p>
        <p v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Kids</p>
    
  </div>
</template>

<script>

import {eventBus} from '../main';

export default {
  name: 'navbar',
  data() {
    return {
      selectedProduct: 'mens'
    }
  },

  methods: {
  selectedPage(page) {
    eventBus.$emit("selected-page", page);
    },
  },

  selectedProduct(product) {
    eventBus.$emit("selected-product", product);
    },
  }

</script>

<style>

</style>