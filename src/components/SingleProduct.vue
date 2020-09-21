<template>
  <div>
    <strong>
      <p>Name of Item</p>
      </strong>

       <img :src="image" :alt="name" class="card-img-top img-fluid" @click="goToProduct(invId)">
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, veniam? Impedit atque aperiam cumque dolor fugit? Autem quasi animi error impedit ad reprehenderit eius maiores architecto minus, nihil sint. Voluptatum?</p>
      <br>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, veniam? Impedit atque aperiam cumque dolor fugit? Autem quasi animi error impedit ad reprehenderit eius maiores architecto minus, nihil sint. Voluptatum?</p>
      <br>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, veniam? Impedit atque aperiam cumque dolor fugit? Autem quasi animi error impedit ad reprehenderit eius maiores architecto minus, nihil sint. Voluptatum?</p>
      <br>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, veniam? Impedit atque aperiam cumque dolor fugit? Autem quasi animi error impedit ad reprehenderit eius maiores architecto minus, nihil sint. Voluptatum?</p>
      <br>
  </div>
</template>

<script>
export default {
    name: 'SingleProduct'
}
</script>

<style>

</style>