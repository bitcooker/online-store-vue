<template>

<div>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand v-on:click="selectedPage('home')" href="#">Golden Shoe</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="md" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="md" class="m-md-2" type="submit">Search</b-button>
        </b-nav-form>

       

        <b-dropdown id="dropdown-1" text="Mens" class="m-md-2">
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">All Shoes</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Brogues</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Loafers</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Slippers</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Trainers</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('mens')" href="#">Wide Fit Shoes</b-dropdown-item>
        </b-dropdown>

         <b-dropdown id="dropdown-1" text="Womens" class="m-md-2">
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('womens')" href="#">All Shoes</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('womens')" href="#">Ballet Pumps</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('womens')" href="#">Flat Shoes</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('womens')" href="#">Heels</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('womens')" href="#">Trainers</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('womens')" href="#">Wide Fit Shoes</b-dropdown-item>
        </b-dropdown>

         <b-dropdown id="dropdown-1" text="Kids" class="m-md-2">
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('kids')" href="#">All Shoes</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('kids')" href="#">School Shoes</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('kids')" href="#">Trainers</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('kids')" href="#">Wellies</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('kids')" href="#">Toddler Shoes</b-dropdown-item>
          <b-dropdown-item v-on:click="selectedPage('products'), selectedProduct('kids')" href="#">Canvas</b-dropdown-item>
        </b-dropdown>


         <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>

            

          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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