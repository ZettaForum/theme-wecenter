
<template>
    <div class="aw-search-box hidden-sm">
        <div class="input-group">
            <input
                class="form-control"
                type="text"
                :placeholder="'search-box.placeholder' | translate"
                autocomplete="off"
                v-model="text"
                @keyup.enter="search"
            />
            <span
                class="input-group-addon"
                :title="'search-box.search' | translate"
                id="global_search_btns"
                @click="search"
            >
                <i class="icon icon-search"></i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return ({
            text: ""
        })
    },
    methods: {
        search() {
            this.$router.push({
                path: "/search",
                query: { q: this.text }
            })
        }
    }
}
</script>

<style scoped>
    .aw-search-box {
        width: 460px;
        float: none;
        margin: 0 auto;
    }

    .aw-search-box .form-control {
        border-radius: 0;
        border-color: #54beff;
    }

    .aw-search-box .input-group {
        margin: 0 auto;
    }

    .aw-search-box .input-group input {
        width: 460px;
        padding-right: 50px;
    }

    .aw-search-box #global_search_btns {
        top: 0;
        right: 0;
        z-index: 10;
        width: 40px;
        height: 32px;
        border-radius: 0;
        border-color: #54beff;
        color: #fff;
        background-color: #54beff;
        cursor: pointer;
    }
</style>

