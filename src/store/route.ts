import { defineStore } from 'pinia';

export const routeStore = defineStore({
  id: 'route',
  state: () => ({
    route: 'all',
  }),
  getters: {
    getRoute: (state) => {
      return state.route;
    },
  },
  actions: {
    changeRoute(newRoute: string) {
      this.route = newRoute;
    },
  },
});
