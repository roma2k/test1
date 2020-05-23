import Vue from 'vue';
import Vuex from 'vuex';
//import {firestoreAction, vuexfireMutations} from "vuexfire";
import {db} from '@/db';
//import {firestore} from "firebase";
Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        phones: [],
        isLoadingPhones: true,

    },
    mutations: {
        //...vuexfireMutations,
        changeLoading: (state, t) => {
            state.isLoadingPhones = t;
        },
        setPhones: (state, data) => {
            state.phones = data;
        }
    },
    actions: {
        /*BIND_PHONES: firestoreAction(({ bindFirestoreRef , commit}) => {
           bindFirestoreRef('phones', db.collection('phones')).then((b)=>{
                setTimeout(()=>{console.log('123')}, 3000);
                commit('changeLoading', false)
                return b;
            })

        }),*/
        BIND_PHONES({commit}) {

            db.collection('phones').get().then(r => {
                console.log();
                let b = []
                r.forEach(doc => {
                    b.push({id: doc.id, phone: doc.data().phone})
                });

                commit('setPhones', b)
                commit('changeLoading', false)
            })


        }
    },

    getters: {
        PHONES(state) {
            return state.phones;
        },
        GET_LOADER_STATE(state) {
            return state.isLoadingPhones;
        }
    }
})

export default store;
