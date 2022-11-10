import { defineStore } from 'pinia';

export const routeStore = defineStore({
  id: 'route',
  state: () => ({
    route: 'All',
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
