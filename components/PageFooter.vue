
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
}
</script>

<style>
</style>

