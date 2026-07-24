<script setup>
import { defineProps } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const props = defineProps({
  task: Object
})

const store = useTaskStore()

function markComplete() {
  store.toggleComplete(props.task.id)
}
</script>

<template>
  <div class="task-card" :class="{ complete: props.task.isComplete }">
    <h3>{{ props.task.title }}</h3>
    <button @click="markComplete" :disabled="props.task.isComplete">
      {{ props.task.isComplete ? 'Completed' : 'Mark Complete' }}
    </button>
  </div>
</template>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
}
.task-card.complete {
  background-color: #e0ffe0;
  text-decoration: line-through;
}
button {
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
}
button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>
