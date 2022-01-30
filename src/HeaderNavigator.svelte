<script>
    import {createEventDispatcher} from "svelte"

    let dispatch = createEventDispatcher()
    export let activeTab

    function navigate(tab){
        dispatch('navigate',{
            tab: tab
        })
    }
</script>

<div class="container">
    <img class="icon" src="favicon.png" on:click={() => {navigate('index')}} />
    <div class="title" on:click={() => {navigate('index')}}>
        DRK Team
    </div>
    <div class="tabs">
        <div class="tab" class:active="{activeTab == 'index'}" on:click={() => {navigate('index')}}>
            Главная
        </div>
        <div class="tab" class:active="{activeTab == 'about'}" on:click={() => {navigate('about')}}>
            Информация
        </div>
    </div>
</div>

<style>
    .container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: stretch;
        height: 64px;
        border-width: 0;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(270deg ,#9c27b0, #2196f3);
        border-image-slice: 1;
    }

    .icon {
        width: 64px;
        height: 64px;
        cursor: pointer;
    }

    .title {
        font-weight: bold;
        font-size: 36px;
        margin-left: 8px;
        font-family: "Tw Cen MT Condensed";
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    @media (max-width: 998px){
        .title{
            display: none;
        }
    }

    .tabs {
        display: flex;
        flex-flow: row nowrap;
        align-items: stretch;
        justify-content: flex-start;
        margin-left: 8px;
    }

    @media (min-width: 999px){
        .tabs {
            margin-left: 48px;
        }
    }

    .tab {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 16px;
    }

    .tab:hover {
        background-color: #424242;
    }

    .active {
        font-weight: bold;
        border-width: 0;
        border-top: 4px solid transparent;
        border-image: linear-gradient(270deg, #9c27b0, #2196f3);
        border-image-slice: 1;
        color: #2196f3;
    }
</style>