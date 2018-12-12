<template>
    <div class="aw-top-menu-wrap">
        <div class="container">

            <top-menu-logo
                :src="init.logo"
                :link="init.logoLink"
            ></top-menu-logo>

            <top-menu-search-box></top-menu-search-box>

            <!-- 导航 -->
            <top-menu-navbar></top-menu-navbar>
            <!-- end 导航 -->

            <!-- 用户栏 -->
            <top-menu-user-nav></top-menu-user-nav>
            <!-- end 用户栏 -->

            <!-- 发起 -->
            <top-menu-publish-btn></top-menu-publish-btn>
            <!-- end 发起 -->
        </div>
    </div>
</template>

<script>
import TopMenuLogo from "./TopMenuLogo.vue"
import TopMenuSearchBox from "./TopMenuSearchBox.vue"
import TopMenuNavbar from "./TopMenuNavbar.vue"
import TopMenuUserNav from "./TopMenuUserNav.vue"
import TopMenuPublishBtn from "./TopMenuPublishBtn.vue"

export default {
    components: {
        TopMenuLogo,
        TopMenuSearchBox,
        TopMenuNavbar,
        TopMenuUserNav,
        TopMenuPublishBtn
    },
    inject: ["init"],
    data() {
        return ({
        })
    },
}
</script>

<style>
    .aw-top-menu-wrap {
        position: relative;
        z-index: 1001;
        width: 100%;
        min-height: 50px;
        background-color: #499ef3;
    }
</style>
