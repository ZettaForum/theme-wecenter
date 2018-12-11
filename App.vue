<template>
    <main>
        <the-nav-bar></the-nav-bar>
        <router-view></router-view>
    </main>
</template>

<script>

import TheNavBar from "./components/TheNavBar.vue"

export default {
    components: {
        TheNavBar,
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
