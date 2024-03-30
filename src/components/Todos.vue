<template>
    <h1>Todo You</h1>
    <div v-bind:key="todo.id" v-for="todo in todosProps">
        <!-- <h1> {{ todo.id }} {{ todo.title }}</h1>  -->

      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
      
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'Todos',
    components:{
        TodoItem
    },
    props: ["todosProps"],
    

}
</script>

<style></style>