
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
                    icon="list"
                    active
                >
                    发现
                </navbar-item>

                <!-- <li><a href="/question/" class="">问题</a></li>

                        <li><a href="/article/" class="">文章</a></li>-->
                <navbar-item
                    href="/topic/"
                    icon="topic"
                >
                    话题
                </navbar-item>

                <navbar-item
                    href="/help/"
                    icon="bulb"
                >
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

