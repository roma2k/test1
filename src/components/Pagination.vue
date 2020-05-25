<template>
    <tr>
        <td colspan="2">
            <div class="tableBottomPagination">

                <div>
                    <button><i class="fas fa-chevron-left"></i></button>
                    <button><i class="fas fa-chevron-right"></i></button>
                </div>
                <div>
                    1-1 из {{viewAllCount.allCount}}
                </div>
                <div>
                    <select name="perPage" id="perPageInput" @change="e=>changeLimit(e.target.value)">
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="25">25</option>
                    </select>
                </div>

                <div class="aboutPagesTitle">
                    Строк на странице:
                </div>

            </div>
        </td>

    </tr>
</template>


<script>


    import {mapGetters, mapMutations} from "vuex";

    export default {
        data() {
            return {
                showed: 0,
                allCount: 0,
                pages: 0,

            }

        },

        methods: {
            ...mapMutations(['changeLimit']),

        },
        computed: {
            ...mapGetters(['viewAllCount'])
        },

    }

</script>

<style scoped>
    * {
        color: #989898;
    }

    button {
        background: unset;
        box-shadow: unset;
    }

    .tableBottomPagination {
        display: flex;
        flex-flow: row-reverse;
        align-items: baseline;
    }

    .tableBottomPagination div {
        margin-left: 30px;
    }

    @media (max-width: 575.98px) {

        .tableBottomPagination {
            flex-flow: row;
        }

        .tableBottomPagination div {
            margin: 0;
            flex: 1;
        }

        .aboutPagesTitle {
            display: none
        }
    }
</style>
