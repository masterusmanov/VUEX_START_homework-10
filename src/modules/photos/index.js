import axios from "../../service/axios/axios";

const getPhotos = {
    state: () => (
        {photos: [], loadPhotos: false, errorMessage: ""}
    ),
    mutations: {
        SET_PHOTOS(state, payload) {
            state.photos = payload;
        },
        SET_LOADING1(state) {
            state.loadPhotos = true;
        },
        SET_ERROR(state, error) {
            state.errorMessage = error;
        }
    },
    actions: {
        async getPhotos({commit}) {
            try {
                const response = await axios.get("/photos")
                commit('SET_PHOTOS', response.data)
                commit('SET_LOADING1')
            } catch (err) {
                console.log('error')
                commit('SET_ERROR', err)
            }
        }
    }
};
export default getPhotos;