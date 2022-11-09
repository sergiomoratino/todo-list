import { defineStore } from 'pinia';
export interface task {
  id: Number;
  name: String;
  completed: boolean;
}

export const tasksStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: Array<task>,
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

    async postTask(newTask: task) {
      try {
        const response = await fetch('http://localhost:3002/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        });
        const tasks = await response.json();
        this.tasks = tasks;
      } catch (err) {
        console.error(err);
      }
      this.fetchTasks();
    },

    async updateTaskStatus(idTask: Number) {
      let task = this.tasks.find((task) => task.id === idTask);
      task.completed = !task.completed;
      const response = await fetch(`http://localhost:3002/tasks/${idTask}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      this.fetchTasks();
    },

    async updateTaskName(idTask: Number, newName: String) {
      let task = this.tasks.find((task) => task.id === idTask);
      task.name = newName;
      const response = await fetch(`http://localhost:3002/tasks/${idTask}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      this.fetchTasks();
    }
  },
});
