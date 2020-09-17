<template>
  <div>
        <p v-on:click="selectedPage('Home')" href="#">holding text</p>
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

</style>