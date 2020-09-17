<template>
  <div>
        <p v-on:click="selectedPage('Mens')" href="#">Mens</p>
         <p v-on:click="selectedPage('Womans')" href="#">Womans</p>
          <p v-on:click="selectedPage('Kids')" href="#">Kids</p>
      <!-- This is the home page 
      <button class="btn btn-primary" @click="womans()">    </button> -->
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
  selectedPage(page) {
    eventBus.$emit("selected-page", page);
    },
  },
}
</script>

<style>

</style>