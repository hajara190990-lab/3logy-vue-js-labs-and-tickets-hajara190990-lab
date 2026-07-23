<script setup>
import { ref } from 'vue'
import { useProducts } from '../composables/useProducts'
import ProductCard from './ProductCard.vue'

const { products, loading } = useProducts()
const cart = ref([])

function handleAddToCart(productId) {
  cart.value.push(productId)
}
</script>

<template>
  <div class="product-list">
    <h2>Products</h2>
    <p>Cart Items: {{ cart.length }}</p>

    <div v-if="loading">Loading products...</div>
    <div v-else class="grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :image="product.image"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}
</style>
