<template>
  <div>
      <h1>Size Chart</h1>

      <h2>Mens Size</h2>

      <img src="https://firebasestorage.googleapis.com/v0/b/goldenshoe-9c251.appspot.com/o/mensSizeGuide070313.jpg?alt=media&token=a2bd8803-74ae-44df-b583-a1a8e1e66eb4" alt="">
       
       <h2>Womens Size</h2>

       <img src="https://firebasestorage.googleapis.com/v0/b/goldenshoe-9c251.appspot.com/o/womensSizeGuide070313.jpg?alt=media&token=3e137bff-b9ee-489e-808f-3c29a3b710d3" alt="">

       

       <h2>Kids Size</h2>

       <img src="https://firebasestorage.googleapis.com/v0/b/goldenshoe-9c251.appspot.com/o/kidsSizeGuide070313.jpg?alt=media&token=3e6c49ca-0ba4-4997-a800-ee5e40aa0bb1" alt="">



  </div>
</template>

<script>

import { eventBus } from '../main';

export default {
    name: "sizeChart",

      methods: {
    

      selectedPage(page) {
        eventBus.$emit("selected-page", page);
      },

    }
}
</script>
