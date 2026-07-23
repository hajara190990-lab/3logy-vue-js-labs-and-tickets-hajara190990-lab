<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/login">Login</RouterLink> |
      <RouterLink to="/admin">Admin</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 1rem;
}
nav a {
  margin: 0 0.5rem;
}
</style>
