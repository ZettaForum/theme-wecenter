
<template>
    <div class="aw-publish-btn">

        <a
            id="header_publish"
            class="btn-primary"
            @click="publish('question')"
        >
            <i class="icon icon-ask"></i>发起
        </a>

        <div class="dropdown-list pull-right">
            <ul>
                <li>
                    <a @click="publish('question')">
                        问题
                    </a>
                </li>
                <li>
                    <a @click="publish('article')">
                        文章
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        publish(type = "question") {
            this.$router.push({
                path: `/publish/${type}/`,
            })
        },
    }
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

