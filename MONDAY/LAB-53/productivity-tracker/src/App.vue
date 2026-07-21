<script setup>
import { ref, computed } from 'vue'

// Step 3: Implement Reactivity
const newTask = ref('')        // Holds the text typed into the input
const tasks = ref([])          // Holds the list of tasks

function addTask() {
  if (newTask.value.trim() !== '') {   // Only add if not empty
    tasks.value.push(newTask.value)    // Add task to the array
    newTask.value = ''                 // Clear the input field
  }
}

// Step 5: Computed Property
const taskCount = computed(() => tasks.value.length)
</script>

<template>
  <div class="app-container">
    <h1>Productivity Tracker</h1>

    <!-- Input bound to newTask -->
    <input v-model="newTask" placeholder="Enter a task" />

    <!-- Button triggers addTask -->
    <button @click="addTask">Add Task</button>

    <!-- List of tasks -->
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
      </li>
    </ul>

    <!-- Computed property display -->
    <h3>Total Tasks: {{ taskCount }}</h3>
  </div>
</template>

<style scoped>
.app-container {
  padding: 2rem;
  font-family: sans-serif;
}

input {
  margin-right: 0.5rem;
  padding: 0.4rem;
}

button {
  padding: 0.4rem 0.8rem;
  cursor: pointer;
}

ul {
  margin-top: 1rem;
}

li {
  margin: 0.3rem 0;
}
</style>
