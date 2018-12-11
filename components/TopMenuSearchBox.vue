
<template>
    <div class="aw-search-box hidden-xs hidden-sm">
        <form
            class="navbar-search"
            action="/search/"
            id="global_search_form"
            method="post"
        >
            <input
                class="form-control search-query"
                type="text"
                placeholder="搜索问题、话题或人"
                autocomplete="off"
                name="q"
                id="aw-search-query"
            >
            <span
                title="搜索"
                id="global_search_btns"
                onclick="$('#global_search_form').submit();"
            >
                <i class="icon icon-search"></i>
            </span>
            <div class="aw-dropdown">
                <div class="mod-body">
                    <p class="title">输入关键字进行搜索</p>
                    <ul class="aw-dropdown-list collapse"></ul>
                    <p class="search">
                        <span>搜索:</span>
                        <a onclick="$('#global_search_form').submit();"></a>
                    </p>
                </div>
                <div class="mod-footer">
                    <a
                        href="/publish"
                        onclick="$('#header_publish').click();"
                        class="pull-right btn btn-mini btn-success publish"
                    >发起问题</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {

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

    .aw-search-box .aw-dropdown {
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
