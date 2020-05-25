<template>
    <div id="app" class="container-fluid">
        <div class="container"><h5>Стоп-лист</h5>
            <breadcrumbs/>
        </div>
        <div class="container phoneTableWrap mt-3 pb-3">
            <router-view>
                <Table/>
            </router-view>
        </div>


    </div>
</template>

<script>
    import Breadcrumbs from '@/components/Breadcrumbs';

    export default {
        name: 'App',
        components: {
            Breadcrumbs
        }
    }
</script>

<style>
    a {
        color: #26869e;
        text-decoration: underline;
    }

    .phoneTableWrap {
        background: #fafafa;
    }

    button {
        border-radius: 35px;
        border: 0;
        color: #fff;
        box-shadow: 0px 4px 6px 0px #b9b6b6;
        height: 40px;
        padding: 6px 20px;
        font-weight: 600;
    }

    button:hover {
        opacity: .85;
    }


    button.round {
        width: 40px;
        height: 40px;
        padding: 6px;
    }

    button.redButton {
        background: #f44336;
    }

    button.blueButton {
        background: #02738e;
    }

    button.greenButton {
        background: #4caf50;
    }

    button.lightBlueButton {
        background: #2196f3;
    }

    button.purpleButton {
        background: #3f51b5;
    }
    button.greyButton {
        color:#303030;
        background: #f5f5f5;
    }
    input:focus, button:focus, select:focus {
        outline: none;
    }

    button:active {
        box-shadow: 0px 0px 6px 0px #b9b6b6;
        opacity: 1;
    }

    input, select {
        background: unset;
        border: unset;
        border-bottom: 1px solid #afafaf;
        height: 35px;
    }



</style>
