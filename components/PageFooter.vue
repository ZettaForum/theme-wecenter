
<template>
    <div class="aw-footer-wrap">
        <div class="aw-footer">
            <template v-if="footerType == 'Footer'">
                Copyright © {{ year }} {{ footer.author }}. All Rights Reserved.

                <span class="hidden-xs">
                    Powered By
                    <a
                        href="https://github.com/ZettaForum/core"
                        rel="nofollow noreferrer noopener"
                        target="_blank"
                    >
                        ZettaForum
                    </a>
                </span>
            </template>

            <template v-else-if="footerType == 'string'">
                <div v-html="footer"></div>
            </template>

            <template v-else>
                <div v-html="getOuterHTML(footer)"></div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    inject: ["init"],
    data() {
        return ({
        })
    },
    computed: {
        footer() {
            return this.init.footer
        },
        footerType() {
            const footer = this.init.footer

            if (typeof footer == "string") {
                return "string"
            } else if (footer instanceof Element) {
                return "Element"
            } else {
                return "Footer"
            }
        },
        year() {
            if (!this.footer.year) return

            const thisYear = new Date().getFullYear()
            const foundingYear = this.footer.year

            if (thisYear <= foundingYear) {
                return `${thisYear}`
            } else {
                return `${foundingYear}-${thisYear}`
            }
        }
    },
    methods: {
        /** 
         * @param {Element} e
         */
        getOuterHTML(e) {
            return e.outerHTML
        }
    }
}
</script>

<style>
    .aw-footer {
        padding: 30px 0 10px;
        font-size: 12px;
        text-align: center;
    }
</style>

