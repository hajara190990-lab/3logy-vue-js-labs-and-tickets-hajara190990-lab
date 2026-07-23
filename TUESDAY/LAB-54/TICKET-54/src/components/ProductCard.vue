<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  image: String
})

const emit = defineEmits(['addToCart'])

function addToCart() {
  emit('addToCart', props.id)
}
</script>

<template>
  <div class="product-card">
    <img :src="props.image" :alt="props.title" />
    <h3>{{ props.title }}</h3>
    <p>${{ props.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
}
img {
  max-width: 100px;
  margin-bottom: 0.5rem;
}
button {
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
}
button:hover {
  background-color: #45a049;
}
</style>
