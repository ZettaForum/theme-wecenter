
<template>
    <div class="container category">
        <div class="row">
            <div class="col-sm-12">
                <ul class="list">
                    <template v-for="(item, index) of init.categoryNav">
                        <category-item
                            :href="item.href"
                            :key="index"
                            :active="$route.path == item.href"
                        >
                            <span v-html="item.name"></span>
                        </category-item>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import CategoryItem from "./CategoryContainerItem.vue"

export default {
    components: {
        CategoryItem
    },
    inject: ["init"],
}

</script>

<style>
    /* 分类 */
    .category {
        margin-bottom: 20px;
    }

    .category dl,
    .category dl dt,
    .category dl dd {
        float: left;
    }

    .category dl {
        position: relative;
        margin: 10px 20px 10px 0;
        padding: 15px;
    }

    .category dl:hover .aw-dropdown,
    .category ul li:hover .aw-dropdown,
    .category dl .aw-dropdown ul li a {
        display: block;
    }

    .category dl:hover,
    .category .col-sm-12 > .active {
        background: #ebebeb;
    }

    .category dl dt,
    .category dl dt img {
        width: 50px;
        height: 50px;
    }

    .category dl dd {
        width: 130px;
        overflow: hidden;
    }

    .category dl dd a {
        display: block;
        max-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .category dl dd span {
        display: block;
        height: 36px;
        font-size: 12px;
        word-wrap: break-word;
    }

    .category dl .aw-dropdown span,
    .category ul li .aw-dropdown span {
        position: absolute;
        top: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
    }

    .category .list > li {
        float: left;
        position: relative;
        height: 30px;
        line-height: 30px;
        margin: 0 10px 10px 0;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
    }

    .category .list > li > a {
        display: block;
        padding: 0 10px;
        color: #17344a;
    }

    .category .list > li.active,
    .category .list > li:hover {
        background: #494a4b;
    }

    .category .list > li.active > a,
    .category .list > li:hover > a {
        color: #fff;
    }

    .category ul li .aw-dropdown {
        width: 120px;
    }
</style>

