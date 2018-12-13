
<template>
    <!-- tab切换 -->
    <ul class="nav nav-tabs aw-nav-tabs active hidden-xs">
        <template v-if="false">
            <!-- 暂时隐藏 -->
            <li>
                <a href="/sort_type-unresponsive">
                    等待回复
                </a>
            </li>

            <li>
                <a
                    href="/sort_type-hot__day-7"
                    id="sort_control_hot"
                >
                    热门
                </a>
            </li>

            <li>
                <a href="/is_recommend-1">
                    推荐
                </a>
            </li>

            <li class="active">
                <a href="/">
                    最新
                </a>
            </li>
        </template>

        <h2 class="hidden-xs">
            <i :class="'icon icon-'+icon"></i>
            <slot></slot>
        </h2>
    </ul>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: "list"
        },
    },
}
</script>

<style>
    /* tabs切换样式 */

    .aw-nav-tabs {
        position: relative;
        z-index: 1;
        height: 63px;
        margin: 0;
        padding: 30px 20px 0;
        border-color: #e6e6e6;
    }

    .aw-nav-tabs.active > li {
        float: right;
    }

    .aw-nav-tabs > li {
        margin: 0 4px 0 0;
        font-size: 14px;
    }

    .aw-nav-tabs > li > a {
        line-height: 30px;
        padding: 0 13px;
        background-color: #fff;
        border: none;
        cursor: pointer;
    }

    .aw-nav-tabs > li > a:hover {
        border: none;
        border-bottom: 2px solid #155faa;
        background-color: #fff;
        color: #333;
    }

    .aw-nav-tabs > li.active a {
        line-height: 30px;
        background-color: #fff;
        border: none;
        border-bottom: 2px solid #155faa;
        font-weight: bold;
        color: #333;
    }

    .aw-nav-tabs > li.active a:hover,
    .aw-nav-tabs > li.active a:focus,
    .aw-nav-tabs > li > a:focus {
        border: none;
        border-bottom: 2px solid #155faa;
        background-color: #fff;
    }

    .aw-nav-tabs h2 {
        position: absolute;
        top: 16px;
        left: 20px;
        margin: 0;
        font-size: 20px;
    }

    @media (max-width: 736px) {
        .aw-nav-tabs {
            padding: 30px 10px 0;
        }
        .aw-nav-tabs > li {
            margin: 0;
        }
    }
</style>


