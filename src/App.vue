<template>
<div id="app" class="container my-5">
  <div>
    <NavBar></NavBar>
   <Home class="img" v-if="selectedPage === 'home'"></Home>
  </div>

  <Products v-if="selectedPage === 'products'"> </Products>
   <div>
   <SingleProduct v-if="selectedPage === 'SingleProduct'"> </SingleProduct>
   </div>
   <div>
    
   </div>
   <CsPage v-if="selectedPage === 'csPage'"></CsPage>
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
import SingleProduct from "./components/SingleProduct"
import Chat from "./components/Chat"
import CsPage from "./components/CsPage"

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
    SingleProduct,
    Chat,
    CsPage,
    
   
  },
};

</script>

<style>
#app {
     
       background-image: url("./assets/shoe.jpg");
       width: 100%;
       height: 100%;
       background-repeat: no-repeat;
       background-size: auto;
     
      }
</style>
  