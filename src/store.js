import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Vuex Demo',
    newTodo: '',
    todos: [
      {
        title: 'TODO 1',
        done: false,
      },
      {
        title: 'TODO 2',
        done: false,
      },
    ],
  },
  mutations: {
    setNewTodo(state, value) {
      state.newTodo = value;
    },
    addTodo(state) {
      state.todos.push(
        {
          title: state.newTodo,
          done: false,
        },
      );
    },
    toggle(state, index) {
      state.todos[index].done = !state.todos[index].done;
    },
    allDone(state) {
      state.todos.forEach((elem) => {
        elem.done = true;
      });
    },
  },
  actions: {
    addTodo(context) {
      context.commit('addTodo');
      context.commit('setNewTodo', '');
    },
    toggleDone(context, index) {
      context.commit('toggle', index);
    },
  },
});
