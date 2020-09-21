<template>
  <div id="app1" class="container my-5">
  <div class="row mb-3" >
      <div class="col-md-9">
        <h1>Golden Shoe</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
  <div class="row" >
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :stock="item.stock" />
    </div>
    </div>
</template>

<script>

import Item from './Item';
import ShoppingCart from './ShoppingCart';
import { eventBus } from "../main";
import * as firebase from 'firebase/app';
import 'firebase/storage';


export default {
  name: 'products',

    asyncComputed: {
    forSale() {
      return new Promise((resolve, reject) => {
        this.$store.getters.forSale.forEach(product => {
          firebase.storage().refFromURL(product.image)
              .getDownloadURL().then(url => {
                product.image = url;
              });
        });
        resolve (this.$store.getters.forSale);
      });
    }
  },

  components: {
    Item,
    ShoppingCart,
  },
}

</script>

<style>

</style>