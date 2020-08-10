<template>
  <div>
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import Todos from '@/components/Todos.vue'

export default {
  name: 'home',
  components: {
    AddTodo,
    Todos
  }
}
</script>
