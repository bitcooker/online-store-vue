<template>
<div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top img-fluid" @click="goToProduct(invId)">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
         <div class="card-text" >stock = {{stock}}</div>
        <div class="card-text">${{ price / 100 }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(invId)" v-if="stock > 1">Add to cart</button>
          <div class="card-text">{{ price | dollars }}</div>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dollars } from '../filters';
import {eventBus} from '../main';

export default {
  name: 'item',
  props: ['invId', 'name', 'image', 'price', 'stock'],
   filters: {
    dollars,
  },
    methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },

    goToProduct(invID){
       eventBus.$emit("selected-page", 'SingleProduct');
    }
  },
};

</script>