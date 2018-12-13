<template>
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
</template>

<script>
export default {

}
</script>

<style>
    /* 动态首页新通知提示box */

    .aw-notification-box {
        padding-bottom: 20px;
        border-bottom: 1px solid #e6e6e6;
    }

    .aw-notification-box .icon-tips {
        display: none;
    }

    .aw-notification-box .mod-body,
    .aw-notification-box .mod-footer {
        padding: 0 20px;
    }

    .aw-notification-box .mod-body ul li {
        position: relative;
        padding: 10px 0;
        border-top: 1px dotted #e2e2e2;
        line-height: 14px;
    }

    .aw-notification-box .mod-body ul li:first-child {
        border-top: none;
    }

    .aw-notification-box .mod-body ul li span {
        font-size: 12px;
    }

    .aw-notification-box .mod-body ul li p {
        margin: 0;
        line-height: 24px;
    }

    .aw-notification-box .icon-tips {
        position: absolute;
        right: 0;
    }

    .aw-notification-box .mod-body ul li .read {
        display: none;
        color: #999;
    }

    .aw-notification-box .mod-body ul li .more {
        margin: 5px 0 0 5px;
        font-size: 12px;
    }

    .aw-notification-box .mod-body ul li:hover .read {
        display: block;
    }
</style>

