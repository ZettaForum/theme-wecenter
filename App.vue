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
