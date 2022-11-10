import { defineStore } from 'pinia';
import { Task } from '../types';

export const tasksStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: [] as Array<Task>,
  }),
  getters: {
    getTasks: (state) => {
      return state.tasks;
    },
  },
  actions: {
    async fetchTasks() {
      try {
        const response = await fetch('http://localhost:3002/tasks');
        const tasks = await response.json();
        this.tasks = tasks;
      } catch (err) {
        console.error(err);
      }
    },

    async postTask(newTask: Task) {
      try {
        await fetch('http://localhost:3002/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        });
      } catch (err) {
        console.error(err);
      }
      this.fetchTasks();
    },

    async updateTaskStatus(idTask: number, isCompleted: boolean) {
      let task = this.tasks.find((task) => task.id === idTask);
      if (task !== undefined) {
        task.completed = isCompleted;
        try {
          await fetch(`http://localhost:3002/tasks/${idTask}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
          });
        } catch (err) {
          console.error(err);
        }
      }
    },

    async updateTaskName(idTask: number, newName: string) {
      let task = this.tasks.find((task) => task.id === idTask);
      if (task !== undefined) {
        task.name = newName;
        try {
          await fetch(`http://localhost:3002/tasks/${idTask}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
          });
          this.fetchTasks();
        } catch (err) {
          console.error(err);
        }
      }
    },

    async deleteTask(idTask: number) {
      try {
        await fetch(`http://localhost:3002/tasks/${idTask}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.fetchTasks();
      } catch (err) {
        console.error(err);
      }
    },
  },
});
