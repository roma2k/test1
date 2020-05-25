import Vue from 'vue';
import Router from 'vue-router'

import Table from "@/components/Table";
import EditPage from "@/components/EditPhone";
import AddPhone from "@/components/AddPhone";
Vue.use(Router)

let router = new Router({
    routes:[
        {path: '/', component: Table},
        {path: '/page/:n', component: Table, params:true},
        {path: '/edit/:id', component: EditPage},
        {path: '/add', component: AddPhone},
        {path: '*', component: Table},
    ],
    mode:'history',
})


export default router;
