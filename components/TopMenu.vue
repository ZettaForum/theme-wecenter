<template>
    <div class="aw-top-menu-wrap">
        <div class="container">

            <top-menu-logo :src="init.logo"></top-menu-logo>

            <top-menu-search-box></top-menu-search-box>

            <!-- 导航 -->
            <top-menu-navbar></top-menu-navbar>
            <!-- end 导航 -->

            <!-- 用户栏 -->
            <div class="aw-user-nav">
                <!-- 登陆&注册栏 -->
                <a
                    class="login btn btn-normal btn-primary"
                    href="/account/login/"
                >登录</a>
                <a
                    class="register btn btn-normal btn-success"
                    href="/account/register/"
                >注册</a>
                <!-- end 登陆&注册栏 -->
            </div>
            <!-- end 用户栏 -->
            <!-- 发起 -->
            <!-- end 发起 -->
        </div>
    </div>
</template>

<script>
import TopMenuLogo from "./TopMenuLogo.vue"
import TopMenuSearchBox from "./TopMenuSearchBox.vue"
import TopMenuNavbar from "./TopMenuNavbar.vue"

export default {
    components: {
        TopMenuLogo,
        TopMenuSearchBox,
        TopMenuNavbar
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

    .aw-search-box,
    .aw-top-nav {
        position: relative;
        float: left;
    }
</style>
