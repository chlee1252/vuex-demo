<template>
  <div id="app">
    <h2>{{title}}</h2>
    <form @submit.prevent="addTodo">
      <label>new Todo</label>
      <input v-model="newTodo" type="text" name="newTodo">
      <button type="submit" name="button">Add</button>
    </form>
    <button @click="allDone" type="button" name="button">All Done</button>
    <ul>
      <li :key="index" v-for="(elem, index) in todos">
        <input @click="toggleDone(index)" type="checkbox" v-model="elem.done">
        <span :class="{ done: elem.done }">{{elem.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'app',
  computed: {
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.commit('setNewTodo', value);
      },
    },
    ...mapState(['todos', 'title']),
  },
  methods: {
    ...mapMutations(['allDone']),
    ...mapActions(['addTodo', 'toggleDone']),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.done {
  text-decoration: line-through;
}
</style>
