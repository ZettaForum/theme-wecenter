
<template>
    <div
        class="aw-search-box hidden-xs hidden-sm"
        @keyup.esc="hide"
        @mouseleave="hide"
    >
        <input
            class="form-control"
            type="text"
            :placeholder="'search-box.placeholder' | translate"
            autocomplete="off"
            v-model="text"
            @keyup.enter="search"
            @focus="show"
        />

        <span
            :title="'search-box.search' | translate"
            id="global_search_btns"
            @click="search"
        >
            <i class="icon icon-search"></i>
        </span>

        <transition name="dropdown">
            <div
                class="aw-dropdown"
                v-show="showing"
            >
                <div class="mod-body">
                    <p class="title">输入关键字进行搜索</p>
                    <ul class="aw-dropdown-list collapse"></ul>
                    <p class="search">
                        <span>搜索:</span>
                        <a @click="search"></a>
                    </p>
                </div>
                <div class="mod-footer">
                    <router-link
                        to="/publish"
                        class="pull-right btn btn-mini btn-success publish"
                        @click="hide"
                    >
                        发起问题
                    </router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return ({
            text: "",
            showing: false
        })
    },
    methods: {
        search() {
            this.$router.push({
                path: "/search",
                query: { q: this.text }
            })
        },
        hide() {
            this.showing = false
        },
        show() {
            this.showing = true
        }
    }
}
</script>

<style scoped>
    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: opacity 0.5s;
    }
    .dropdown-enter,
    .dropdown-leave-to {
        opacity: 0;
    }
</style>


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

    .aw-search-box .aw-dropdown {
        display: block;
        width: 355px;
    }

    .aw-search-box .aw-dropdown p {
        height: 38px;
        line-height: 38px;
        margin: 0;
        padding: 0 10px;
        font-weight: normal;
        border-bottom: 1px solid #f0f0f0;
    }

    .aw-search-box .aw-dropdown p.search {
        display: none;
    }

    .aw-search-box .aw-dropdown .mod-footer {
        height: 42px;
        line-height: 42px;
        background-color: #fafafa;
    }

    .aw-search-box .aw-dropdown .mod-footer .btn-success {
        margin: 10px;
    }

    .aw-search-box .aw-dropdown .aw-dropdown-list {
        max-height: 337px;
        overflow-y: scroll;
        border-bottom: 1px solid #f0f0f0;
    }

    .aw-search-box .aw-dropdown .aw-dropdown-list li.question .aw-hide-txt {
        width: 250px;
    }
</style>
