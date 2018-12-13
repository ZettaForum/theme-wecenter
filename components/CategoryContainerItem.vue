
<template>
    <li
        @click="$emit('click')"
        :class="{ active: active }"
    >
        <a
            v-if="href.match(/^http(s)?:/)"
            :href="href"
            target="_blank"
        >
            <slot></slot>
        </a>

        <router-link
            v-else
            :to="href"
            target="_blank"
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
            require: true
        },
        active: {
            type: Boolean,
            default: false
        }
    },
}
</script>
