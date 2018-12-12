<template>
    <main>
        <top-menu></top-menu>

        <router-view></router-view>

        <page-footer></page-footer>
    </main>
</template>

<script>

import TopMenu from "./components/TopMenu.vue"
import PageFooter from "./components/PageFooter.vue"

export default {
    components: {
        TopMenu,
        PageFooter
    },
    data() {
        return ({
        })
    },
}
</script>
