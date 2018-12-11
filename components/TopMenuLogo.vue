
<template>
    <div class="aw-logo hidden-xs">
        <router-link :to="link" :style="background"></router-link>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        link: {
            type: String,
            default: "/"
        },
    },
    computed: {
        background() {
            return {
                background: `url("${this.src}") no-repeat`
            }
        }
    }
}
</script>

<style>
    .aw-logo {
        width: 90px;
        height: 40px;
        margin: 7px 0 0 0;
        position: relative;
        float: left;
    }

    .aw-logo a {
        display: block;
        width: 90px;
        height: 40px;
    }

    .aw-logo h1 {
        height: 25px;
        line-height: 25px;
        margin: -2px 0 2px 0;
        font-size: 14px;
    }

    @media not all, (min-resolution: 192dpi) {
        .aw-logo a {
            background-size: 60px auto;
        }
    }
</style>

