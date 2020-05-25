<template>
    <tr>
        <td>{{phone}}</td>
        <td class="text-right">
            <router-link :to="`/edit/${id}`" class="fas fa-pen inRowControlBtns editButton" tag="button"></router-link>
            <button class="fas fa-trash-alt deleteButton inRowControlBtns" @click="deletePhone(id)"></button>
        </td>
    </tr>
</template>

<script>

    import {db} from "@/db";

    export default {
        props: ['phone', 'id'],
        methods: {
            deletePhone(id){
                db.collection('phones').doc(id).delete().then(()=>{
                    this.$router.push('/')
                })
            }
        },
    }

</script>

<style scoped>
    button {
        color: #373737;
        text-decoration: none;
        width:10px;
        height: auto;
        background: unset;
        box-shadow: unset;
    }
    .deleteButton {
        color: #f44336;
    }

    button {
        margin-right: 10px;
    }


</style>
