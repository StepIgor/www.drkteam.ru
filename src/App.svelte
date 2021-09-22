<script>
    import {fly} from 'svelte/transition'
    import {onMount} from 'svelte'
    import {lastAppUpdate} from "./stores";

    let visible = false
    let copied = ''

    let currentDate = new Date()

    if ($lastAppUpdate.length == 0 || $lastAppUpdate[0] != currentDate.getDate() || $lastAppUpdate[1] != currentDate.getMonth() || $lastAppUpdate[2] != currentDate.getFullYear()){
        let lastUpdate = []
        lastUpdate.push(currentDate.getDate())
        lastUpdate.push(currentDate.getMonth())
        lastUpdate.push(currentDate.getFullYear())
        lastAppUpdate.set(lastUpdate)
        window.location.reload(true)
    }

    onMount(() => {
        visible = true
    })

    function copyIp(ip) {
        navigator.clipboard.writeText(ip)
        copied = 'The address is copied!'
    }
</script>

{#if visible}
    <div class="container">
        <div class="header row center-align">
            <img src="favicon.png"/>
            <span class="light white-text">Community Game Servers</span>
        </div>
        <div class="row center-align notifier">
            {#if copied}
                <div in:fly="{{y:-30, duration: 300}}" class="col s12 m12 l12 center-align white-text light tip">
                    {copied}
                </div>
            {/if}
        </div>
        <div in:fly="{{y: 200, duration: 1000}}" class="row server-list">
            <div class="col s12 m12 l12 white-text center-align">
<!--                <ul class="collection">-->
                    <!--                    COUNTER-STRIKE 1.6 SERVER #1-->
<!--                    <li class="collection-item avatar">-->
<!--                        <img src="icons/counter_strike_16.png" alt="" class="circle">-->
<!--                        <span class="title">Counter-Strike 1.6</span>-->
<!--                        <p>Public, Mix<br>-->
<!--                            <span class="ip" on:click={()=>{copyIp('128.0.0.1:25565')}}>128.0.0.1:25565</span>-->
<!--                        </p>-->
<!--                        <a class="secondary-content green-text">online</a>-->
<!--                    </li>-->
<!--                </ul>-->
                <b>No game servers online</b>
            </div>
        </div>
        <div class="row about">
            <div class="col s12 m12 l12 center-align">
                <a href="https://discord.gg/GQCFeNhqzg" target="_blank"><img src="img/discord.png" class="hoverable responsive-img contacts"/></a>
                <a href="https://steamcommunity.com/groups/drkteamru" target="_blank"><img src="img/steam.png" class="hoverable responsive-img contacts"/></a>
                <a href="https://t.me/drkteamru" target="_blank"><img src="img/telegram.png" class="hoverable responsive-img contacts"/></a>
            </div>
            <div class="col s12 m12 l12 center-align white-text">
                2021 - <a href="mailto:darkness@drkteam.ru" class="white-text">darkness@drkteam.ru</a>
            </div>
        </div>
    </div>
{/if}

<style>
    .header {
        display: flex;
        font-size: 48px;
        flex-direction: column;
        margin-top: 25px;
    }

    img {
        width: 128px;
        height: 128px;
        margin: auto;
    }

    .server-list {
        margin-top: 90px;
    }

    .title {
        font-weight: bold;
    }

    .ip {
        color: #F44336;
        cursor: pointer;
    }

    .tip {
        font-size: 24px;
    }

    .about {
        margin-top: 75px;
    }

    .notifier {
        height: 38px;
    }

    .contacts {
        width: 32px;
        height: 32px;
        cursor: pointer;
        border-radius: 10px;
    }
</style>