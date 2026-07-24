<script setup>
import { useTaskStore } from '../stores/taskStore'
import TaskCard from './TaskCard.vue'

const store = useTaskStore()
</script>

<template>
  <div class="dashboard">
    <h1>Task Dashboard</h1>
    <p>Completed Tasks: {{ store.completedCount }}</p>

    <TaskCard
      v-for="task in store.tasks"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<style scoped>
.dashboard {
  padding: 2rem;
  font-family: sans-serif;
}
</style>
