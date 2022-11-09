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
import { watch, toRefs, Ref } from 'vue';

interface task {
  id: Number;
  name: string;
  completed: boolean;
}

defineProps<{
    task: Ref<task>;
}>();


</script>
