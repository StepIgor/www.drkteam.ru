import {writable} from "svelte/store";

export let lastAppUpdate = writable(localStorage.getItem('lastAppUpdate') == null ? [] : JSON.parse(localStorage.getItem('lastAppUpdate')))
lastAppUpdate.subscribe((val) => localStorage.setItem('lastAppUpdate', JSON.stringify(val)))