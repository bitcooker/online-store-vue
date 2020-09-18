<template>
  <div>

    <img class="mainImage" src="../assets/shoe.jpg" alt="HeroImage">
      <!-- This is the home page 
      <button class="btn btn-primary" @click="womans()">    </button> -->
  </div>
</template>

<script>

  import { eventBus } from '../main';

export default {
  name: 'Home',
  methods: {
  selectedPage(page) {
    eventBus.$emit("selected-page", page);
    },
  },
}

</script>

<style>

.mainImage {
  width: 80vw;
  background-repeat: no-repeat;
  
}

</style>