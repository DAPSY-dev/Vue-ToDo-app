import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'
const limit = '_limit=20'

const state = {
    todos: []
}

const getters = {
    allTodos: state => state.todos
}

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => state.todos.unshift(todo),
    changeTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
        if (index !== -1) {
            state.todos.splice(index, 1, updatedTodo)
        }
    },
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
}

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(`${url}?${limit}`)
        commit('setTodos', response.data)
    },
    async addTodo({ commit }, title) {
        const response = await axios.post(url, {
            title,
            completed: false
        })
        commit('newTodo', response.data)
    },
    async updateTodo({ commit }, updatedTodo) {
        const response = await axios.put(`${url}/${updatedTodo.id}`, updatedTodo)
        commit('changeTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`${url}/${id}`)
        commit('removeTodo', id)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
