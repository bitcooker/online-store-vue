<template>
  <div class="mainImage">
    <!-- <img src="../assets/shoe.jpg" alt="HeroImage"> -->
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
  /* background-image: url("../assets/shoe.jpg");
  width: 1000px;
  height: 1000px;
  background-repeat: no-repeat; */  
}

</style>