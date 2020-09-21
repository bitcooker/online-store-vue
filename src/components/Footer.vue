<template>
  <div>
    <p>
      <strong>Golden Shoe</strong> by AND.Digital. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
    <div>
        <a :href="`mailto:support@goldenshoe.com`">Contact Us</a>
       <a :href="`http://www.facebook.com`">Facebook</a>
            <a :href="`http://www.twitter.com`">Twitter</a>
                 <a :href="`http://www.instagram.com`">Instagram</a>
  <div>
    <p v-on:click="selectedPage('csPage')" href="#">Delivery & Returns</p>
    </div>
     <div>
    <p v-on:click="selectedPage('contactForm')" href="#">Contact Form</p>
    </div>
    </div>
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
