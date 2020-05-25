<template>
    <div class="row mt-4 pt-4">
        <div class="col-md-6 col-12 addPhoneWrap">
            <input type="number" v-model="phone" placeholder="Номер телефона">
            <button class="round lightBlueButton" ><i class="fas fa-check"></i></button>
        </div>
        <div class="col-12 mt-4">
            <button class="greyButton" @click="$router.push('/')">
                Назад
            </button>
        </div>
    </div>
</template>


<script>

    export default {
        name: 'AddPhone',
        data() {
            return {
                phone: '',
            }
        },
    }
</script>
<style>
    .addPhoneWrap {
        display: grid;
        grid-template-columns: 2fr auto auto;
        -moz-column-gap: 10px;
        column-gap: 10px;
    }

</style>
