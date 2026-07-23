<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/products">Products</RouterLink> |
      <RouterLink to="/checkout">Checkout</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
