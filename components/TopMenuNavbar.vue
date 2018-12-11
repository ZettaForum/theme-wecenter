
<template>
    <div class="aw-top-nav navbar">

        <navbar-header></navbar-header>

        <nav
            role="navigation"
            class="collapse navbar-collapse bs-navbar-collapse active"
        >
            <ul class="nav navbar-nav">
                <navbar-item
                    href="/"
                    active
                >
                    <i class="icon icon-list"></i> 发现
                </navbar-item>
                <!-- <li><a href="/question/" class="">问题</a></li>

                        <li><a href="/article/" class="">文章</a></li>-->
                <navbar-item href="/topic/">
                    <i class="icon icon-topic"></i>
                    话题
                </navbar-item>
                <navbar-item href="/help/">
                    <i class="icon icon-bulb"></i>
                    公告
                </navbar-item>
            </ul>
        </nav>
    </div>
</template>

<script>
import NavbarHeader from "./TopMenuNavbarHeader.vue"
import NavbarItem from "./TopMenuNavbarItem.vue"

export default {
    components: {
        NavbarHeader,
        NavbarItem
    },
}

</script>

<style>
    .aw-top-nav {
        margin: 0;
        border: none;
        position: relative;
        float: left;
    }

    /* iphone竖屏幕 */
    @media (max-width: 414px) {
        .aw-top-nav .navbar-collapse.active {
            left: -1px;
        }
    }

    .aw-top-nav .badge {
        position: absolute;
        top: 4px;
        right: 2px;
    }

    .aw-top-nav ul li:hover .aw-dropdown {
        display: block;
    }

    .aw-top-nav .aw-dropdown {
        display: none;
        top: 100%;
        min-width: 300px;
        border-top: none;
        border-radius: 0 0 4px 4px;
    }

    .aw-top-nav .aw-dropdown .more {
        font-size: 12px;
    }

    .aw-top-nav .aw-dropdown .close {
        display: none;
    }

    .aw-top-nav .aw-dropdown ul li {
        padding: 5px 10px;
        border-top: 1px solid #f5f5f5;
    }

    .aw-top-nav .aw-dropdown ul li:first-child {
        border-top: none;
    }

    .aw-top-nav .aw-dropdown ul li:hover {
        background: #f5faff;
    }

    .aw-top-nav .aw-dropdown ul li:hover .read {
        display: inline-block;
    }

    .aw-top-nav .aw-dropdown ul li p {
        margin: 0;
        padding: 0;
    }

    .aw-top-nav .aw-dropdown ul li .message {
        display: inline-block;
        width: 260px;
        font-size: 12px;
    }

    .aw-top-nav .aw-dropdown ul li .read {
        display: none;
    }

    .aw-top-nav .aw-dropdown ul li:last-child {
        border-radius: 0 0 4px 4px;
    }

    .aw-top-nav .aw-dropdown .mod-footer a {
        display: block;
        height: 40px;
        text-align: center;
        background-color: #fafafa;
        color: #999999;
        font-size: 12px;
        line-height: 40px;
        border-radius: 0 0 4px 4px;
        border-top: 1px solid #f5f5f5;
    }

    @media (max-width: 769px) {
        .navbar-collapse.active {
            display: block;
        }
        .navbar-collapse {
            position: absolute;
            width: 120px;
            left: -16px;
            background: #499ef3;
        }
    }

    @media (min-width: 768px) {
        .navbar-collapse {
            position: static;
            width: auto;
        }
    }
</style>

