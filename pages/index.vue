
<template>
    <div class="aw-container-wrap">
        <category-container></category-container>

        <div class="container">
            <div class="row">
                <div class="aw-content-wrap clearfix">
                    <div class="col-sm-12 col-md-9 aw-main-content">
                        <!-- 新消息通知 -->
                        <div
                            class="aw-mod aw-notification-box collapse"
                            id="index_notification"
                        >
                            <div class="mod-head common-head">
                                <h2>
                                    <span class="pull-right"><a
                                            href="/account/setting/privacy/#notifications"
                                            class="text-color-999"
                                        ><i class="icon icon-setting"></i> 通知设置</a></span>
                                    <i class="icon icon-bell"></i>新通知<em
                                        class="badge badge-important"
                                        name="notification_unread_num"
                                    ></em>
                                </h2>
                            </div>
                            <div class="mod-body">
                                <ul id="notification_list"></ul>
                            </div>
                            <div class="mod-footer clearfix">
                                <a
                                    href="javascript:;"
                                    onclick="AWS.Message.read_notification(false, 0, false);"
                                    class="pull-left btn btn-mini btn-gray"
                                >我知道了</a>
                                <a
                                    href="/notifications/"
                                    class="pull-right btn btn-mini btn-success"
                                >查看所有</a>
                            </div>
                        </div>
                        <!-- end 新消息通知 -->
                        <!-- tab切换 -->
                        <ul class="nav nav-tabs aw-nav-tabs active hidden-xs">
                            <li><a href="/sort_type-unresponsive">等待回复</a></li>
                            <li><a
                                    href="/sort_type-hot__day-7"
                                    id="sort_control_hot"
                                >热门</a></li>
                            <li><a href="/is_recommend-1">推荐</a></li>
                            <li class="active"><a href="/">最新</a></li>

                            <h2 class="hidden-xs"><i class="icon icon-list"></i> 发现</h2>
                        </ul>
                        <!-- end tab切换 -->

                        <div class="aw-mod aw-explore-list">
                            <div class="mod-body">
                                <div class="aw-common-list">
                                    <div
                                        class="aw-item "
                                        data-topic-id="26,309,263,147,8,163,162,"
                                    >
                                        <a
                                            class="aw-user-name hidden-xs"
                                            data-id="56"
                                            href="/people/globalHe"
                                            rel="nofollow"
                                        ><img alt="" /><i class="icon icon-v"></i></a>
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/question/1925">如何评价百度百科“20世纪最具影响力的100个人物”词条删除王维林？</a>
                                            </h4>
                                            <div class="pull-right hidden-xs contribute">
                                                <span class="pull-right text-color-999">贡献</span>
                                                <a
                                                    class="aw-user-name"
                                                    data-id="673"
                                                    href="/people/Wallace"
                                                    rel="nofollow"
                                                ><img alt="" /></a>
                                                <a
                                                    class="aw-user-name"
                                                    data-id="881"
                                                    href="/people/toadfan"
                                                    rel="nofollow"
                                                ><img alt="" /></a>
                                            </div>

                                            <p>
                                                <a
                                                    class="aw-question-tags"
                                                    href="/explore/category-1"
                                                >默认分类</a>
                                                • <a
                                                    href="/people/%E6%A8%A1%E7%B3%8A%E7%9A%84%E8%9B%A4%E5%9B%BD%E5%9C%B0%E7%8B%B1"
                                                    class="aw-user-name"
                                                    data-id="1015"
                                                >模糊的蛤国地狱</a> <span class="text-color-999">回复了问题
                                                    • 6 人关注 • 6 个回复 • 101 次浏览 • 1 分钟前 </span>
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
                                        <a href="/topic/乳包"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <p class="clearfix">
                                            <span class="topic-tag">
                                                <a
                                                    href="/topic/乳包"
                                                    class="text"
                                                    data-id="160"
                                                >乳包</a>
                                            </span>
                                        </p>
                                        <p><b>315</b> 个问题, <b>62</b> 人关注</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/topic/膜蛤"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <p class="clearfix">
                                            <span class="topic-tag">
                                                <a
                                                    href="/topic/膜蛤"
                                                    class="text"
                                                    data-id="4"
                                                >膜蛤</a>
                                            </span>
                                        </p>
                                        <p><b>436</b> 个问题, <b>67</b> 人关注</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/topic/中国"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <p class="clearfix">
                                            <span class="topic-tag">
                                                <a
                                                    href="/topic/中国"
                                                    class="text"
                                                    data-id="143"
                                                >中国</a>
                                            </span>
                                        </p>
                                        <p><b>138</b> 个问题, <b>11</b> 人关注</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/topic/膜法"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <p class="clearfix">
                                            <span class="topic-tag">
                                                <a
                                                    href="/topic/膜法"
                                                    class="text"
                                                    data-id="78"
                                                >膜法</a>
                                            </span>
                                        </p>
                                        <p><b>117</b> 个问题, <b>11</b> 人关注</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/topic/政治"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <p class="clearfix">
                                            <span class="topic-tag">
                                                <a
                                                    href="/topic/政治"
                                                    class="text"
                                                    data-id="8"
                                                >政治</a>
                                            </span>
                                        </p>
                                        <p><b>379</b> 个问题, <b>28</b> 人关注</p>
                                    </dd>
                                </dl>
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
                                        <a href="/people/gbsat"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <a
                                            href="/people/gbsat"
                                            data-id="430"
                                            class="aw-user-name"
                                        >小管家<i
                                                class="icon-v"
                                                title="个人认证"
                                            ></i>
                                        </a>
                                        <p class="signature"></p>
                                        <p><b>292</b> 个问题, <b>1120</b> 次赞同</p>
                                    </dd>
                                </dl>

                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/people/winnie97"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <a
                                            href="/people/winnie97"
                                            data-id="1234"
                                            class="aw-user-name"
                                        >winnie97 </a>
                                        <p class="signature"></p>
                                        <p><b>70</b> 个问题, <b>191</b> 次赞同</p>
                                    </dd>
                                </dl>

                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/people/Rayista"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <a
                                            href="/people/Rayista"
                                            data-id="54"
                                            class="aw-user-name"
                                        >Rayista </a>
                                        <p class="signature"></p>
                                        <p><b>79</b> 个问题, <b>281</b> 次赞同</p>
                                    </dd>
                                </dl>

                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/people/%E7%94%B7%E5%AD%A9%E4%B8%BA%E4%BD%95%E7%A9%BF%E7%BA%A2%E8%A1%A3"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <a
                                            href="/people/%E7%94%B7%E5%AD%A9%E4%B8%BA%E4%BD%95%E7%A9%BF%E7%BA%A2%E8%A1%A3"
                                            data-id="640"
                                            class="aw-user-name"
                                        >男孩为何穿红衣 </a>
                                        <p class="signature"></p>
                                        <p><b>77</b> 个问题, <b>222</b> 次赞同</p>
                                    </dd>
                                </dl>

                                <dl>
                                    <dt class="pull-left aw-border-radius-5">
                                        <a href="/people/%E6%B0%B4%E5%B7%A5%E5%85%88%E7%94%9F"><img alt="" /></a>
                                    </dt>
                                    <dd class="pull-left">
                                        <a
                                            href="/people/%E6%B0%B4%E5%B7%A5%E5%85%88%E7%94%9F"
                                            data-id="1347"
                                            class="aw-user-name"
                                        >水工先生
                                        </a>
                                        <p class="signature"></p>
                                        <p><b>84</b> 个问题, <b>152</b> 次赞同</p>
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

export default {
    components: {
        CategoryContainer,
    },
}

</script>

<style>
</style>
