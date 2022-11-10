<template>
  <ul class="todo-list">
    <li class="editing">
      <input
        v-model="task.name"
        class="edit"
        type="text"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Task } from '../types'

defineProps<{
    task: Task;
}>();


</script>
