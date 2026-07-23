<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const products = [
  { id: 1, title: 'Laptop Pro', price: 999, description: 'High performance laptop.' },
  { id: 2, title: 'Wireless Mouse', price: 29, description: 'Ergonomic wireless mouse.' },
  { id: 3, title: 'USB-C Hub', price: 49, description: 'Multi-port USB-C hub.' },
  { id: 4, title: 'Mechanical Keyboard', price: 120, description: 'Durable mechanical keyboard.' },
  { id: 5, title: 'Noise Cancelling Headphones', price: 199, description: 'Immersive sound experience.' }
]

const productId = Number(route.params.id)
const product = products.find(p => p.id === productId)
</script>

<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <p>Price: ${{ product.price }}</p>
    <p>{{ product.description }}</p>
    <RouterLink to="/checkout">Proceed to Checkout</RouterLink>
  </div>
  <div v-else>
    <h2>Product not found</h2>
  </div>
</template>
