import axios from "../../service/axios/axios";

const getPost = {
    state: () => (
        {posts: [], loadPost: false, errorMessage: ""}
    ),
    mutations: {
        SET_POST(state, payload) {
            state.posts = payload;
        },
        SET_LOADING(state) {
            state.loadPost = true;
        },
        SET_ERROR(state, error) {
            state.errorMessage = error;
        }
    },
    actions: {
        async getPost({commit}) {
            try {
                const response = await axios.get("/posts")
                commit('SET_POST', response.data)
                commit('SET_LOADING')
            } catch (err) {
                console.log('error')
                commit('SET_ERROR', err)
            }
        }
    }
};
export default getPost;