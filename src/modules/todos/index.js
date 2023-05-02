import axios from "../../service/axios/axios";

const getTodos = {
    state: () => (
        {todos: [], loadTodos: false, errorMessage: ""}
    ),
    mutations: {
        SET_TODOS(state, payload) {
            state.todos = payload;
        },
        SET_LOADING1(state) {
            state.loadTodos = true;
        },
        SET_ERROR(state, error) {
            state.errorMessage = error;
        }
    },
    actions: {
        async getTodos({commit}) {
            try {
                const response = await axios.get("/todos")
                commit('SET_TODOS', response.data)
                commit('SET_LOADING1')
            } catch (err) {
                console.log('error')
                commit('SET_ERROR', err)
            }
        }
    }
};
export default getTodos;