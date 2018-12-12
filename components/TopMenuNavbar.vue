
<template>
    <div class="aw-top-nav navbar">

        <navbar-header @click="show = !show"></navbar-header>

        <nav
            role="navigation"
            class="collapse navbar-collapse bs-navbar-collapse"
            :class="{ active: show }"
        >
            <ul class="nav navbar-nav">
                <template v-for="(topNavItem, index) of init.topNav">
                    <navbar-item
                        :href="topNavItem.href"
                        :icon="topNavItem.icon"
                        :key="index"
                        :active="$route.path == topNavItem.href"
                        @click="show = false"
                    >
                        {{ topNavItem.name }}
                    </navbar-item>
                </template>
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
    inject: ["init"],
    data() {
        return ({
            show: false
        })
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

