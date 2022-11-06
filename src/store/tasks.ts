import { defineStore } from 'pinia';
export interface task {
  id: Number;
  name: String;
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
        console.log('ee', this.tasks);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
