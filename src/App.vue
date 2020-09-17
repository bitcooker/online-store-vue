<template>
<div id="app" class="container my-5">
  <div>
    <NavBar></NavBar>
   <Home v-if="selectedPage === 'home'"></Home>
  </div>

  <Products> </Products>


  <!-- <div class="row mb-3" >
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
    </div> -->
    <div>
      <Footer></Footer>
    </div>
    </div>
</template>
<script>

import Item from './components/Item';
import ShoppingCart from './components/ShoppingCart';
import { eventBus } from "./main";
import Home from "./components/Home"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Products from "./components/Products"

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
    Home,
    NavBar,
    Footer,
    Item,
    ShoppingCart,
    Products,
    
   
  },
};

</script>
<style>
 

</style>