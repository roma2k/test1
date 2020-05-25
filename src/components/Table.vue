<template>
    <div class="pb-4">
        <table-controls/>
        <table class="mt-4 w-100">
            <thead>
            <tr>
                <th>Телефон</th>
                <th class="text-right">Действия</th>
            </tr>

            </thead>
            <div v-if="loading">LOADING</div>
            <phone-string v-else v-for="phone in phones" :key="phone.id" :phone="phone.phone" :id="phone.id"></phone-string>
            <pagination />
        </table>
    </div>
</template>

<script>
    import TableControls from "@/components/TableControls";
    import PhoneString from "@/components/PhoneString";
    import Pagination from "@/components/Pagination";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: 'Table',
        components: {PhoneString, TableControls, Pagination},
        computed:{
            ...mapGetters(['loading', 'phones']),
            ...mapActions(['getBase'])
        },

    }
</script>


<style>
    table {
        width: 100%;
        border-collapse: collapse;
        padding: 30px;
        font-size: .85em;
        box-shadow: 0px 1px 2px #00000080;
        min-height: 100px;
    }


    table tr:last-child td {
        border-bottom: unset;
    }

    thead {

        font-weight: 300 !important;
        color: #989898;
    }

    td, tr, th {
        padding: 20px;
        border: unset;
    }

    th {
        border-bottom: 1px solid #d7d7d7;
    }

    td {
        border-bottom: 1px solid #d7d7d7;
    }

    tr {
        background: #fff;
    }


</style>
