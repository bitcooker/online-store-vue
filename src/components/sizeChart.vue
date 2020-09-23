<template>
  <div>
      <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis esse magnam enim dicta quaerat impedit? Eligendi excepturi, expedita voluptatum beatae dolores voluptatem modi doloremque facere odio deleniti fugiat quo.</p>
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
