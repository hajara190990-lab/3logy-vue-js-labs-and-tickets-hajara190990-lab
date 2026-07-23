<script setup>
import { RouterLink } from 'vue-router'

const products = [
  { id: 1, title: 'Laptop Pro', price: 999 },
  { id: 2, title: 'Wireless Mouse', price: 29 },
  { id: 3, title: 'USB-C Hub', price: 49 },
  { id: 4, title: 'Mechanical Keyboard', price: 120 },
  { id: 5, title: 'Noise Cancelling Headphones', price: 199 }
]
</script>

<template>
  <div class="products">
    <h1>Products</h1>
    <ul>
      <li v-for="p in products" :key="p.id">
        {{ p.title }} - ${{ p.price }}
        <RouterLink :to="`/products/${p.id}`">View Details</RouterLink>
      </li>
    </ul>
  </div>
</template>
