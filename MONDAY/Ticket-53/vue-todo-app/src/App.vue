<script setup>
import { ref, computed } from 'vue'

// Reactive state
const newTodo = ref('')       // Holds the text typed into the "Add Todo" input
const todos = ref([])         // Holds the list of todos
const searchQuery = ref('')   // Holds the text typed into the "Search" input

// Add a new todo
function addTodo() {
  if (newTodo.value.trim() !== '') {
    todos.value.push(newTodo.value)
    newTodo.value = '' // clear input after adding
  }
}

// Delete a todo by index
function deleteTodo(index) {
  todos.value.splice(index, 1)
}

// Computed property for search filtering
const filteredTodos = computed(() => {
  if (searchQuery.value.trim() === '') {
    return todos.value
  }
  return todos.value.filter(todo =>
    todo.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="app-container">
    <h1>Classic ToDo App</h1>

    <!-- Add Todo Input -->
    <input v-model="newTodo" placeholder="Enter a new todo" />
    <button @click="addTodo">Add Todo</button>

    <!-- Search Input -->
    <div class="search-box">
      <input v-model="searchQuery" placeholder="Search todos..." />
    </div>

    <!-- Todo List -->
    <ul>
      <li v-for="(todo, index) in filteredTodos" :key="index">
        {{ todo }}
        <button class="delete-btn" @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.app-container {
  padding: 2rem;
  font-family: sans-serif;
  max-width: 500px;
  margin: auto;
}

input {
  padding: 0.5rem;
  margin-right: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #4caf50;
  border: none;
  color: white;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

.search-box {
  margin-top: 1rem;
}

ul {
  margin-top: 1rem;
  padding-left: 1.2rem;
}

li {
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background-color: #f44336;
}

.delete-btn:hover {
  background-color: #d32f2f;
}
</style>
