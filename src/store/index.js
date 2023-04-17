import { createStore } from "vuex";
const store = createStore({
    state: {
        user: null,
        isLogin: false,
        isAdmin: false,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            state.isLogin = true;
        },
        setAdmin(state, isAdmin) {
            state.isAdmin = isAdmin;
        }
    },
    actions: {},
    getters: {},
    modules: {}
})
export default store;
