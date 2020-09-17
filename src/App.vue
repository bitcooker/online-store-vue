<template>
<div id="app" class="container my-5">
  <div>
    Nav Bar here
  </div>
  <div class="row mb-3">
      <div class="col-md-9">
        <h1>Golden Shoe</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
  <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
    </div>
</template>
<script>

import Item from './components/Item';
import ShoppingCart from './components/ShoppingCart';
import { eventBus } from "./main";

export default {
  name: 'app',

  data() {
    return {
      selectedPage: "home"
    }
  },

  mounted() {
    eventBus.$on("selected-page", (page) => {
      this.selectedPage = page;
    });
  },

  computed: {
    forSale() { return this.$store.getters.forSale; },
  },

  components: {
    Item,
    ShoppingCart,
  },
};

</script>
<style>
  /* Nothing for now */
</style>