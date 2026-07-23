<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { globalState } from '../router'

const email = ref('')
const password = ref('')
const router = useRouter()

// Form validation
const isFormValid = computed(() => {
  return email.value.includes('@') && password.value.length >= 5
})

function handleLogin() {
  globalState.isAuthenticated = true
  router.push('/admin')
}
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <button type="submit" :disabled="!isFormValid">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login {
  padding: 2rem;
  font-family: sans-serif;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
