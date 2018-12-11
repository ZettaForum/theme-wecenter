<template>
    <main>
        <top-menu></top-menu>
        <router-view></router-view>
    </main>
</template>

<script>

import TopMenu from "./components/TopMenu.vue"

export default {
    components: {
        TopMenu,
    },
    data() {
        return ({
        })
    },
}
</script>

<style>
    @import url("./lib/bootstrap.css");
    @import url("./lib/common.css");
</style>
