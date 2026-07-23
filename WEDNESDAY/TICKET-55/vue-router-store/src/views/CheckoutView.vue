<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const address = ref('')
const creditCard = ref('')

const isFormValid = computed(() => {
  return (
    name.value.trim() !== '' &&
    address.value.length >= 10 &&
    creditCard.value.length === 16
  )
})

function handleSubmit() {
  alert('Order placed successfully!')
}
</script>

<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Full Name:</label>
        <input v-model="name" />
      </div>
      <div>
        <label>Address:</label>
        <input v-model="address" />
      </div>
      <div>
        <label>Credit Card:</label>
        <input v-model="creditCard" />
      </div>
      <button type="submit" :disabled="!isFormValid">Submit</button>
    </form>
  </div>
</template>
