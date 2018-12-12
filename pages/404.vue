
<template>
    <div class="aw-404">
        <div class="aw-404-wrap container">
            <div class="row">
                <h1>404 Not Found</h1>
                <p>
                    {{ "404page.page_not_found" | translate }}
                    {{ "404page.please" | translate }}
                    <a @click="back">
                        {{ "404page.return" | translate }}
                    </a>
                    {{ "404page.or_search_for_related_content" | translate }}
                </p>
                <search-box></search-box>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from "../components/404SearchBox.vue"

export default {
    components: {
        SearchBox,
    },
    methods: {
        back() {
            top.history.go(-1)
        }
    }
}
</script>

<style>
    .aw-404 {
        background: #f4f4f4;
    }

    .aw-404 .aw-footer-wrap {
        background-color: #fff;
    }

    .aw-404-wrap {
        width: 500px;
        height: auto;
        margin: 100px auto 300px;
        text-align: center;
    }

    .aw-404-wrap h1 {
        font-size: 28px;
    }

    .aw-404-wrap p {
        margin: 45px auto 30px;
        font-size: 18px;
    }

    .aw-404-wrap p a {
        font-size: 18px;
        color: #54beff;
    }
</style>

