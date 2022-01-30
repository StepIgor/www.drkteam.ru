<script>
    import IndexTab from "./IndexTab.svelte";
    import AboutTab from "./AboutTab.svelte";

    export let activeTab
</script>

<div class="container">
    {#if activeTab == 'index'}
        <IndexTab />
    {:else if activeTab == 'about'}
        <AboutTab />
    {/if}
</div>

<style>
    .container {
        position: absolute;
        top: 64px;
        width: calc(100% - 48px);
        left: 0;
        padding: 24px;
    }
</style>