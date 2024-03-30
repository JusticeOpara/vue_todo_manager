<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
        type="text"
        name="title"
        placeholder="Add Todo.."
        v-model="title"
      />
      <input type="submit" value="Submit"  class="btn"/>
  
    </form>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';
export default {
  name: "AddTodo",
  data() {
    return {
      title: '',
    };
  },
  methods: {
    addTodo() {
      
      const newTodo = { 
        // id: uuidv4(), 
        title: this.title,
         completed: false 
        };

      // sending to parent
      this.$emit('add-todo',  newTodo);

      this.title = '';
    },
  },
};
</script>
