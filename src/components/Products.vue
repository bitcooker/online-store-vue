<template>
  <div id="app" class="container my-5">
  <div class="row mb-3" >
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

import Item from './Item';
import ShoppingCart from './ShoppingCart';
import { eventBus } from "../main";


export default {
  name: 'products',
//   methods: {
//   selectedPage(page) {
//     eventBus.$emit("selected-page", page);
//     },
//   },
computed: {
    forSale() { return this.$store.getters.forSale; },
  },

  components: {
    Item,
    ShoppingCart,
  },
}

</script>

<style>

</style>