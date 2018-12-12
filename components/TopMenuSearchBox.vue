
<template>
    <div class="aw-search-box hidden-xs hidden-sm">
        <input
            class="form-control"
            type="text"
            :placeholder="'search-box.placeholder' | translate"
            autocomplete="off"
            v-model="text"
            @keyup.enter="search"
        />

        <span
            :title="'search-box.search' | translate"
            id="global_search_btns"
            @click="search"
        >
            <i class="icon icon-search"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return ({
            text: "",
        })
    },
    methods: {
        search() {
            this.$router.push({
                path: "/search",
                query: { q: this.text }
            })
        },
    }
}
</script>

<style>
    .aw-search-box {
        position: relative;
        float: left;
        margin: 10px 0;
    }

    .aw-search-box input {
        width: 230px;
        height: 32px;
        padding-right: 30px;
        border: none;
    }

    .aw-search-box #global_search_btns {
        position: absolute;
        right: 5px;
        top: 6px;
        font-size: 18px;
        color: #999;
    }
</style>
