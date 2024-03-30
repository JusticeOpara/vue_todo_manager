
<template>
  <div>
    
    <AddTodo v-on:add-todo="addTodo"/>
    <FilterTodo/>
  <Todos v-bind:todosProps="todos" v-on:del-todo="deleteTodo"/>
  </div>

  <router-link to="/">Home</router-link>
</template>



<script >

import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import Home from './view/Home.vue';
import FilterTodo from './components/FilterTodo.vue';
import axios from 'axios'


export default{

  name: 'app',

  components:{
   Todos,
  AddTodo,
  Home,
  FilterTodo
  },
  data(){
    return{
      todos:[]
    }

  },
  methods:{
   deleteTodo(id){
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
     .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(err => console.log(err))

    //  this.todos = this.todos.filter(todo => todo.id !== id)
    //  console.log(this.todos,"--id")
   },

   addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        .then(res => this.todos.unshift(res.data))
        .catch(err => console.log(err));
    },
    filter(condition){
      
      if (condition === 'completed') {
      this.todos = this.todos.filter(todo => todo.completed);
    } else if (condition === 'incomplete') {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
    }
  },

  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err,"--error"))
  },
  mounted(){
    console.log(this.addTodo,"addtodox...")
  }
}
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
