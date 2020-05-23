<template>
    <tr>
        <td>{{phone}}</td>
        <td class="text-right">
            <i class="fas fa-pen inRowControlBtns editButton"></i> <i
                class="fas fa-trash-alt deleteButton inRowControlBtns"></i>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['phone', 'id']
    }
</script>
