<template>
  <div>
     <b-nav tabs justified>
   
       <b-nav-item :href="`mailto:support@goldenshoe.com`">Contact Us</b-nav-item>
      <b-nav-item :href="`http://www.facebook.com`">Facebook</b-nav-item>
      <b-nav-item :href="`http://www.twitter.com`">Twitter</b-nav-item>
      <b-nav-item :href="`http://www.instagram.com`">Instagram</b-nav-item>
 
    <b-nav-item v-on:click="selectedPage('csPage')" href="#">Delivery & Returns</b-nav-item>
 
     <div>
    <b-nav-item v-on:click="selectedPage('contactForm')" href="#">Contact Form</b-nav-item>
    </div>
    
   </b-nav>
  </div>


</template>

<script>

import {eventBus} from '../main';

export default {
  name: "Footer" ,

  methods: {
  selectedPage(page) {
    eventBus.$emit("selected-page", page);
    },
  },
}

</script>

<style>

</style>
