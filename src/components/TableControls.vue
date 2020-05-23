<template>
    <div>
        <div class="row">
            <div class="col-md-7 col-12 searchColumn pt-4">
                <div class="searchFormGroup">
                    <div class="searchFormIconWrap">
                        <label for="searchForm" class="searchFormIcon">
                            <i class="fas fa-search"></i>
                        </label>
                    </div>
                    <input type="text" placeholder="Искать" id="searchForm" v-model="search"/>
                </div>
                <button class="blueButton">НАЙТИ</button>
                <button class="round redButton" @click="clearSearchInput()"><i class="fas fa-times-circle"></i></button>
            </div>
            <div class="col-md-5 col-12 controlColumn pt-4">
                <router-link to="/add/" tag="button" class="greenButton">ДОБАВИТЬ</router-link>
                <button class="round lightBlueButton"><i class="fas fa-file-download"></i></button>
                <button class="round purpleButton"><i class="fas fa-file-import"></i></button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'TableControls',
        data() {
            return{
                search:'',
            }
        },
        methods: {
            clearSearchInput () {
                this.search = ''
            }
        }
    }
</script>


<style scoped>
    label[for='searchForm'] {
        font-weight: 300;
    }


    #searchForm{
        flex:1 1 auto;
        width:1%;
    }
    .searchFormIcon{
        display: flex;
        align-items: center;
        padding: .375rem .75rem .375rem 0;
        margin-bottom: 0;
        text-align: center;
        color:#7c7c7c;
    }
    .searchFormGroup {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        width: 100%;
    }
    .searchFormIconWrap{
        display: flex;
    }

    .searchColumn{
        display: grid;
        grid-template-columns: 2fr auto auto;
        column-gap: 10px;
    }

    .controlColumn{
        text-align: right;
    }
    .controlColumn button{
        margin-left: 10px;
    }

</style>
