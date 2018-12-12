
<template>
    <div class="aw-publish-btn">

        <a
            id="header_publish"
            class="btn-primary"
            href="/publish/"
        >
            <i class="icon icon-ask"></i>发起
        </a>

        <div class="dropdown-list pull-right">
            <ul>
                <li>
                    <form
                        method="post"
                        action="/publish/"
                    >
                        <a onclick="$(this).parents('form').submit();">问题</a>
                    </form>

                </li>
                <li>
                    <form
                        method="post"
                        action="/publish/article/"
                    >
                        <a onclick="$(this).parents('form').submit();">文章</a>
                    </form>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .aw-publish-btn {
        position: relative;
        float: right;
        margin: 10px 0 10px 10px;
        width: 80px;
    }

    .aw-publish-btn a {
        display: block;
        width: 80px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        text-align: center;
        border-radius: 3px;
    }

    .aw-publish-btn i {
        vertical-align: -2px;
        margin-right: 10px;
        font-size: 16px;
    }

    .aw-publish-btn:hover #header_publish {
        border-radius: 4px 4px 0 0;
    }

    .aw-publish-btn:hover .dropdown-list {
        display: block;
    }

    .aw-publish-btn .dropdown-list {
        position: absolute;
        display: none;
    }

    .aw-publish-btn .dropdown-list a {
        background-color: #4dabff;
        border-radius: 0;
        color: #fff;
    }

    .aw-publish-btn .dropdown-list a:hover {
        background-color: #339dff;
    }

    .aw-publish-btn .dropdown-list ul li:last-child a {
        border-radius: 0 0 4px 4px;
    }
</style>

