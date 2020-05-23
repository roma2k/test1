import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        phones:[
            {id:'123', phone:'79999899999'},
            {id:'431', phone:'79999893999'},
            {id:'151323', phone:'73419899999'},
            {id:'1235133', phone:'79349899999'},
            {id:'11323', phone:'79991199999'},
            {id:'123513', phone:'79299899999'},
            {id:'12313', phone:'79939899999'},
        ],
    },
    mutations: {

    },
    actions: {


    },
    getters: {
        PHONES(state){
            return state.phones;
        }
    }
})

export default store;
