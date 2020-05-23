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
            <phone-string v-for="phone in phones" :key="phone.id" :phone="phone.phone" :id="phone.id"></phone-string>
            <pagination :per-page="perPage" />
        </table>
    </div>
</template>

<script>
    import TableControls from "@/components/TableControls";
    import PhoneString from "@/components/PhoneString";
    import Pagination from "@/components/Pagination";
    export default {
        name: 'Table',
        components: {PhoneString, TableControls, Pagination},
        data(){
            return{
                phones:[
                    {id:'123', phone:'79999899999'},
                    {id:'431', phone:'79999893999'},
                    {id:'151323', phone:'73419899999'},
                    {id:'1235133', phone:'79349899999'},
                    {id:'11323', phone:'79991199999'},
                    {id:'123513', phone:'79299899999'},
                    {id:'12313', phone:'79939899999'},
                ],
                perPage:25,

            }
        }
    }
</script>


<style>
    table {
        width: 100%;
        border-collapse: collapse;
        padding: 30px;
        font-size: .85em;
        box-shadow: 0px 1px 2px #00000080;
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

    .inRowControlBtns {
        margin-right: 20px;
    }

    .editButton {
        margin-right: 40px;
    }
</style>
