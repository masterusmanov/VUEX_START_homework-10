const counter = {
    state: () => (
        {
            number: 0,
            str: "",
            load: true,
        }
    ),
    mutations: {
        INCREMENT(state, str) {
            state.number++
            if (state.number >= 10) {
                state.load = false;
            }
        },
        SET_STR(state, value) {
            state.str = value
        },
        SET_LOAD(state) {
            state.load = false;
        },
    },
};
export default counter;