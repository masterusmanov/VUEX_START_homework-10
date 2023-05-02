import axios from "../../service/axios/axios";

const getComments = {
    state: () => (
        {comments: [], loadComments: false, errorMessage: ""}
    ),
    mutations: {
        SET_COMMENTS(state, payload) {
            state.comments = payload;
        },
        SET_LOADING1(state) {
            state.loadComments = true;
        },
        SET_ERROR(state, error) {
            state.errorMessage = error;
        }
    },
    actions: {
        async getComments({commit}) {
            try {
                const response = await axios.get("/comments")
                commit('SET_COMMENTS', response.data)
                commit('SET_LOADING1')
            } catch (err) {
                console.log('error')
                commit('SET_ERROR', err)
            }
        }
    }
};
export default getComments;