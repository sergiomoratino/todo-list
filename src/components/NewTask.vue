<template>
  <div
    style="display: flex; justify-content: space-between; align-items: center"
  >
    <input class="toggle-all" type="checkbox" />
    <label />
    <input
      class="new-todo"
      type="text"
      id="newTaskInput"
      name="newTaskInput"
      placeholder="What needs to be done?"
      v-on:keyup.enter="addTask(textNewTask)"
      v-model="textNewTask"
      data="textNewTask"
    />
  </div>
</template>

<script setup lang="ts">
import { tasksStore } from '../store/tasks';

let textNewTask = '';

const props = defineProps<{
  numberOfItems: number;
}>();

const { postTask } = tasksStore();

const addTask = (textNewTask: string) => {
  const newTask = {
    id: props.numberOfItems + 1,
    name: textNewTask,
    completed: false,
  };
  postTask(newTask);
};
</script>

<style>
.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.toggle-all {
  text-align: center;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;
  z-index: 999;
  width: 40px;
  height: 40px;
}
.toggle-all + label {
  width: 60px;
  height: 34px;
  font-size: 0;
  position: absolute;
  left: -13px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.toggle-all + label:before {
  content: '❯';
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}

.toggle-all:checked + label:before {
  color: #737373;
}
</style>
