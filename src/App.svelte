<script>
    import {lastAppUpdate} from "./stores";
    import ContentContainer from "./ContentContainer.svelte";
    import HeaderNavigator from "./HeaderNavigator.svelte";

    let currentDate = new Date()
    if ($lastAppUpdate.length == 0 || $lastAppUpdate[0] != currentDate.getDate() || $lastAppUpdate[1] != currentDate.getMonth() || $lastAppUpdate[2] != currentDate.getFullYear()){
        let lastUpdate = []
        lastUpdate.push(currentDate.getDate())
        lastUpdate.push(currentDate.getMonth())
        lastUpdate.push(currentDate.getFullYear())
        lastAppUpdate.set(lastUpdate)
        window.location.reload(true)
    }

    let activeTab = 'index'

    function navigate(tab){
        activeTab = tab.detail.tab
    }
</script>

<HeaderNavigator activeTab={activeTab} on:navigate={navigate} />
<ContentContainer activeTab={activeTab} on:navigate={navigate} />