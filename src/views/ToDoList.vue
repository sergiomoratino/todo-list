<template>
  <h3>ToDo list</h3>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <label> {{ todo.name }}</label>
    </li>
  </ul>
</template>

<script setup lang="ts">
import todos from '../mock/todos';
</script>
