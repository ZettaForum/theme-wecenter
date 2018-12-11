
<template>
    <li>
        <router-link
            :to="href"
            :class="{ active: active }"
        >
            <i
                v-if="icon"
                :class="'icon icon-' + icon"
            ></i>

            <slot></slot>
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
        },
        icon: {
            type: String,
        },
        active: {
            type: Boolean,
            default: false
        }
    },
}
</script>


<style scoped>
    li > a {
        padding: 16px;
        color: #fff;
    }

    li > a.active {
        background: #4dabff;
        font-weight: bold;
    }

    li > a:hover,
    li > a:focus {
        background: #4dabff;
    }

    li > a i {
        position: relative;
        top: 2px;
        font-size: 16px;
    }

    li > a i.icon-home {
        top: 1px;
    }
</style>
