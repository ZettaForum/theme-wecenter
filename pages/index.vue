
<template>
    <div class="aw-container-wrap">
        <category-container></category-container>

        <div class="container">
            <div class="row">
                <div class="aw-content-wrap clearfix">
                    <div class="col-sm-12 col-md-9 aw-main-content">

                        <nav-tabs> {{ title }} </nav-tabs> <!-- tab切换 -->

                        <div class="aw-mod aw-explore-list">
                            <div class="mod-body">
                                <div class="aw-common-list">
                                    <div class="aw-item ">
                                        <a
                                            class="aw-user-name hidden-xs"
                                            href="/people/1"
                                            rel="nofollow"
                                        >
                                            <img alt="" />
                                            <i class="icon icon-v"></i>
                                        </a>
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/question/1">questionTitle</a>
                                            </h4>
                                            <div class="pull-right hidden-xs contribute">
                                                <span class="pull-right text-color-999">贡献</span>
                                                <a
                                                    class="aw-user-name"
                                                    href="/people/1"
                                                    rel="nofollow"
                                                >
                                                    <img alt="" />
                                                </a>
                                                <a
                                                    class="aw-user-name"
                                                    href="/people/1"
                                                    rel="nofollow"
                                                >
                                                    <img alt="" />
                                                </a>
                                            </div>

                                            <p>
                                                <a
                                                    class="aw-question-tags"
                                                    href="/explore/category-1"
                                                >默认分类</a>
                                                • <a
                                                    href="/people/1"
                                                    class="aw-user-name"
                                                >userName</a> <span class="text-color-999">回复了问题
                                                    • 0 人关注 • 0 个回复 • 0 次浏览 • 10 分钟前 </span>
                                                <span class="text-color-999 related-topic collapse"> • 来自相关话题</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-footer">
                                <div class="page-control">
                                    <ul class="pagination pull-right">
                                        <li class="active"><a href="javascript:;">1</a></li>
                                        <li><a href="/sort_type-new__day-0__is_recommend-0__page-2">2</a></li>
                                        <li><a href="/sort_type-new__day-0__is_recommend-0__page-3">3</a></li>
                                        <li><a href="/sort_type-new__day-0__is_recommend-0__page-4">4</a></li>
                                        <li><a href="/sort_type-new__day-0__is_recommend-0__page-2">&gt;</a></li>
                                        <li><a href="/sort_type-new__day-0__is_recommend-0__page-198">&gt;&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 侧边栏 -->
                    <div class="col-sm-12 col-md-3 aw-side-bar hidden-xs hidden-sm">
                        <div class="aw-mod aw-text-align-justify">
                            <div class="mod-head">
                                <a
                                    href="/topic/channel-hot"
                                    class="pull-right"
                                >更多 &gt;</a>
                                <h3>热门话题</h3>
                            </div>
                            <div class="mod-body">
                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/topic/topicName">
                                            <img alt="" />
                                        </a>
                                    </dt>
                                    <dd class="pull-left">
                                        <p class="clearfix">
                                            <span class="topic-tag">
                                                <a
                                                    href="/topic/topicName"
                                                    class="text"
                                                    data-id="160"
                                                >topicName</a>
                                            </span>
                                        </p>
                                        <p><b>1</b> 个问题, <b>1</b> 人关注</p>
                                    </dd>
                                </dl>
                                <!-- 共计5个 -->
                            </div>
                        </div>
                        <div class="aw-mod aw-text-align-justify">
                            <div class="mod-head">
                                <a
                                    href="/people/"
                                    class="pull-right"
                                >更多 &gt;</a>
                                <h3>热门用户</h3>
                            </div>
                            <div class="mod-body">

                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/people/userName">
                                            <img alt="" />
                                        </a>
                                    </dt>
                                    <dd class="pull-left">
                                        <a
                                            href="/people/userName"
                                            class="aw-user-name"
                                        >
                                            userName
                                            <i
                                                class="icon-v"
                                                title="个人认证"
                                            ></i>
                                        </a>
                                        <p class="signature"></p>
                                        <p><b>1</b> 个问题, <b>1</b> 次赞同</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <!-- end 侧边栏 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CategoryContainer from "../components/CategoryContainer.vue"
import NavTabs from "../components/IndexNavTabs.vue"

export default {
    components: {
        CategoryContainer,
        NavTabs
    },
    computed: {
        title() {
            /* eslint-disable indent */
            switch (this.$route.path) {
                case "/article/":
                    return "文章"
                case "/question/":
                    return "问题"
                default:
                    return "发现"
            }
            /* eslint-enable */
        }
    }
}

</script>

<style>
</style>
