<template>
  <div class="todoapp">
    <div v-if="todos.length > 0" class="main">
      <div v-for="todo in todos" :key="todo.id">
        <Task :name="todo.name" />
      </div>
    </div>
    <div v-if="todos.length > 0" class="footer">
      <Footer :number-of-items="todos.length" />
    </div>
  </div>
</template>

<script setup lang="ts">
import todos from '../mock/todos';
import Task from '../components/Task.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}
</style>