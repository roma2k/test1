import Vue from 'vue';
import Vuex from 'vuex';
import {db} from "@/db";


Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        phones: [
            {id: 1, phone: '78945678945'},
            {id: 21, phone: '78945678945'},
            {id: 31, phone: '78945678945'},
            {id: 13, phone: '78945678945'},
            {id: 231, phone: '78945678945'},
            {id: 313, phone: '78945678945'},

        ],
        limit: 3,
        loading: true,
        pages: 0,

    },
    mutations: {
        loaded(state) {
            state.loading = false;
        },
        changeLimit(state, payload) {
            state.limit = parseInt(payload);
        },
        loadPhones(state, payload) {
            state.phones = payload;
        }

    },
    actions: {
        getBase: ({commit}) => {

            db.collection('phones').get().then(r => {
                let b = []
                r.forEach(doc => {
                    b.push({id: doc.id, phone: doc.data().phone})
                });

                commit('loadPhones', b)
                commit('loaded')
            })

        }
    },

    getters: {
        loading(state) {
            return state.loading
        },
        viewLimit(state) {
            return state.limit;
        },
        phones(state, getters) {
            return state.phones.slice(0, getters.viewLimit);

        },
        viewAllCount(state, getters) {
            return {
                allCount: state.phones.length,
                viewCount: getters.phones.length,
            }
        },
    }
})

export default store;
