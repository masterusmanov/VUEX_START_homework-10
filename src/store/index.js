import { createStore } from "vuex";
import getPost from "../modules/post";
import counter from "../modules/counter";
import getComments from "../modules/comments";
import getPhotos from "../modules/photos";
import getTodos from "../modules/todos"

const store = createStore({
    modules: {
        getPost,
        counter,
        getComments,
        getPhotos,
        getTodos
    }
})


export default store;
