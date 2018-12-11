<template>
    <div class="aw-top-menu-wrap">
        <div class="container">

            <the-logo :src="init.logo"></the-logo>

            <the-search-box></the-search-box>

            <!-- 导航 -->
            <div class="aw-top-nav navbar">
                <div class="navbar-header">
                    <button class="navbar-toggle pull-left">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <nav
                    role="navigation"
                    class="collapse navbar-collapse bs-navbar-collapse active"
                >
                    <ul class="nav navbar-nav">
                        <li>
                            <a
                                href="/"
                                class="active"
                            >
                                <i class="icon icon-list"></i> 发现
                            </a>
                        </li>
                        <!-- <li><a href="/question/" class="">问题</a></li>

                        <li><a href="/article/" class="">文章</a></li>-->
                        <li>
                            <a href="/topic/">
                                <i class="icon icon-topic"></i>
                                话题
                            </a>
                        </li>
                        <li>
                            <a href="/help/">
                                <i class="icon icon-bulb"></i>
                                公告
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
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
import TheLogo from "./TheLogo.vue"
import TheSearchBox from "./TheSearchBox.vue"

export default {
    components: {
        TheLogo,
        TheSearchBox,
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
