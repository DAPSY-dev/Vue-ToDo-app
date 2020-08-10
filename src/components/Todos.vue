<template>
    <div>
        <h2>Todos</h2>
        <ul class="todos">
            <li v-for="todo in allTodos" :key="todo.id">
                <input type="checkbox" :id="`todo${ todo.id }`" :checked="todo.completed">
                <label :for="`todo${ todo.id }`" :class="{'is-completed' : todo.completed}" @click="onUpdateTodo(todo)">{{ todo.title }}</label>
                <button type="button" @click="deleteTodo(todo.id)">&times;</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Todos",
    methods: {
        ...mapActions(['fetchTodos', 'updateTodo', 'deleteTodo']),
        onUpdateTodo(todo) {
            const updatedTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updatedTodo)
        }
    },
    computed: {
        ...mapGetters(['allTodos'])
    },
    created() {
        this.fetchTodos()
    }
}
</script>

<style lang="scss">
.todos {
    list-style-type: none;
    padding-left: 0;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;

        label {
            display: inline-block;
            margin: 0;
            padding: 0 10px 0 23px;
            cursor: pointer;

            &.is-completed {
                text-decoration: line-through;
            }
        }

        input[type="checkbox"],
        button {
            margin: 0;
            cursor: pointer;
        }

        input[type="checkbox"] {
            margin-right: -13px;
            pointer-events: none;
        }

        button {
            padding: 0 5px;
        }
    }
}
</style>
