<template>
    <div>
        <p v-bind:class="{ 'is-complete': todo.completed }">
           
            <input v-on:change="markComplete"  type="checkbox"  />

            {{ todo.title }}
            <button class="bg-red-500 rounded w-8" style="background:red;"  @click="$emit('del-todo', todo.id)">X</button>
        </p>

    </div>
</template>

<script>

export default {

    name: 'TodoItem',
    props: ["todo"],
    
component:{

},
    methods: {
        markComplete() {
            
            this.todo.completed = !this.todo.completed
            console.log('marked')
        }
    },
    
}

</script>