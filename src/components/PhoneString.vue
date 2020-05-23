<template>
    <tr>
        <td>{{phone}}</td>
        <td class="text-right">
            <router-link :to="`/edit/${id}`" class="fas fa-pen inRowControlBtns editButton" tag="button"></router-link>
            <button class="fas fa-trash-alt deleteButton inRowControlBtns"></button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['phone', 'id']
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
