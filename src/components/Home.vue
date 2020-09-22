<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Find Your Shoe, Find Your Sole"
        text=""
        img-src="https://firebasestorage.googleapis.com/v0/b/goldenshoe-9c251.appspot.com/o/group.jpg?alt=media&token=373cbbab-cafe-4218-8330-2f8db7a93d07"
      ><h1>Golden Shoe</h1></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/goldenshoe-9c251.appspot.com/o/ivory_wedding_shoes.jpg?alt=media&token=6199cf19-edfd-40d8-b6e7-99948360a335">
        <!-- <h1>Golden Shoe</h1> -->
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/goldenshoe-9c251.appspot.com/o/jump.jpg?alt=media&token=f7273021-5de7-47b6-90a1-96a1b9a1cf92"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://firebasestorage.googleapis.com/v0/b/goldenshoe-9c251.appspot.com/o/running-shoes.jpg?alt=media&token=d46d5d04-774b-40e8-989c-ac06d34de7cb"
            alt="image slot">
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      
    </b-carousel>
<!-- 
    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>

  import { eventBus } from '../main';

 export default {
   name: "home",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      selectedPage(page) {
    eventBus.$emit("selected-page", page);
    },
  },
      
    }
</script>

<style>

