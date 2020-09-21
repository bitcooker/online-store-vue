<template>

<div>
  <!-- <div>
        <p v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Mens</p>
        <p v-on:click="selectedPage('products'), selectedProduct('womans')" href="#">Womans</p>
        <p v-on:click="selectedPage('products'), selectedProduct('kids')" href="#">Kids</p>
  </div> -->

  <div>
  <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Mens</b-dropdown-item>
    <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('womans')" href="#">Womans</b-dropdown-item>
    <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('kids')" href="#">Kids</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</div>


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