import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // to call the data we should do set todos
    commit(response.data, "setTodos");
  },

  async addTodos({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false,
      }
    );
    commit(response.data, "newTodo");
  },

  async delTodo({ commit }, id) {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    commit(id, "delTodo");
  },

  async filterTodo({commit},e){
    // get selected number
    const limit  = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit(response.data, "setTodo")
  },

  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );

    console.log(response.data);

    commit('updateTodo', response.data);
  }
};
// response.data === todos
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  delTodo: (state, id) =>
    (state.todo = state.todo.filter((todo) => todo.id !== id)),
    updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updTodo);
      }
    }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
