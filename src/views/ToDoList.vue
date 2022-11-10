<template>
  <div class="todoapp">
    <div v-if="editing">
      <edit-task
        :task="editingTask"
        @keydown.esc="editing = false"
        @keydown.enter="changeTask(editingTask.id, editingTask.name)"
      />
    </div>
    <div v-else-if="!editing">
      <div class="head">
        <NewTask
          :last-task="tasks[tasks.length - 1]"
          @toogleAllTasks="toogleAllTask(tasks, $event)"
        />
      </div>
      <div v-if="tasks.length > 0" class="main">
        <div v-for="task in tasks" :key="task.id">
          <task-component
            :task="task"
            @checkTask="checkTask(task)"
            @editTask="clickEditTask(task, $event)"
            @deleteTask="clickDeleteTask(task.id)"
          />
        </div>
      </div>
      <div v-if="tasks.length > 0" class="footer">
        <Footer
          :number-of-items="tasks.length"
          @clearCompletedBtn="clearCompletedBtn()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskComponent from '../components/TaskComponent.vue';
import Footer from '../components/Footer.vue';
import NewTask from '../components/NewTask.vue';
import EditTask from '../components/EditTask.vue';
import { tasksStore } from '../store/tasks';
import { storeToRefs } from 'pinia';
import { ref, Ref } from 'vue';
import { Task } from '../types';

const { tasks } = storeToRefs(tasksStore());
const { fetchTasks, updateTaskStatus, updateTaskName, deleteTask } =
  tasksStore();

let editing = ref(false);
let editingTask: Ref<any> = ref({ id: 0, name: 'error', completed: true });

fetchTasks();

const checkTask = (task: Task) => {
  updateTaskStatus(task.id, !task.completed);
};

const clickEditTask = (task: Task, event: Event) => {
  if (event.target !== event.currentTarget) return;
  editingTask.value = task;
  editing.value = !editing.value;
};

const changeTask = (editingTaskId: number, newName: string) => {
  updateTaskName(editingTaskId, newName);
  editing.value = false;
};

const toogleAllTask = (tasks: Array<Task>, event: any) => {
  const isChecked = event.target.checked;
  if (isChecked) {
    tasks.forEach((element) => {
      updateTaskStatus(element.id, true);
    });
  } else {
    tasks.forEach((element) => {
      updateTaskStatus(element.id, false);
    });
  }
};

const clickDeleteTask = (idTask: number) => {
  deleteTask(idTask);
};

const clearCompletedBtn = () => {
  tasks.value.forEach((task) => {
    if (task.completed === true) deleteTask(task.id);
  });
};
</script>

<style>
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
