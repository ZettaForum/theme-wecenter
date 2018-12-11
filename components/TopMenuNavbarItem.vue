
<template>
    <li>
        <router-link
            :to="href"
            :class="{ active: active }"
        >
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

    li:hover .dropdown-list {
        display: block;
    }

    li .dropdown-list {
        display: none;
        position: absolute;
        right: 0;
        width: 80px;
    }

    li .dropdown-list ul li a {
        display: block;
        height: 42px;
        line-height: 42px;
        padding: 0 10px;
        background: #4dabff;
        text-align: center;
        color: #fff;
    }

    li .dropdown-list ul li a:hover {
        background: #339dff;
    }

    li .dropdown-list ul li i {
        margin-right: 3px;
        vertical-align: -1px;
        font-size: 16px;
    }

    li .dropdown-list ul li:last-child a {
        border-radius: 0 0 4px 4px;
    }
</style>
