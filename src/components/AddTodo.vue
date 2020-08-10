<template>
    <div>
        <h2>Add Todo</h2>
        <form @submit="onSubmit">
            <fieldset>
                <legend>Add todo:</legend>
                <div class="add-todo">
                    <div class="add-todo__input">
                        <input type="text" v-model="title" placeholder="Add todo">
                    </div>
                    <div class="add-todo__button">
                        <button type="submit">Add</button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "AddTodo",
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault()
            this.addTodo(this.title)
            this.title = ''
            return false
        }
    },
    data() {
        return {
            title: ''
        }
    }
}
</script>

<style lang="scss">
.add-todo {
    display: flex;
    padding: 0 30px;

    &__input {
        flex: 1 1 0%;
    }

    &__button {

        button {
            cursor: pointer;
        }
    }
}
</style>
