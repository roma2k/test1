<template>
    <tr>
        <td colspan="2">
            <div class="tableBottomPagination">

                <div>
                    <button><i class="fas fa-chevron-left"></i></button>
                    <button><i class="fas fa-chevron-right"></i></button>
                </div>
                <div>
                    1-1 из 1
                </div>
                <div>
                    <select name="perPage" id="perPageInput">
                        <option value="5">5</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
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
    export default {
        props: [
            'perPage'
        ]
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
            margin:0;
            flex:1;
        }
        .aboutPagesTitle{display: none}
    }
</style>
