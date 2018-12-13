/**
 * ZettaForum 泽虵论坛
 * @ZettaForum/Theme-WeCenter
 * @author Xmader
 * @copyright Copyright (c) 2018 Xmader.
 * @license MIT
 */

import "./lib/bootstrap-without-glyphicons.min.css"
import "./lib/icons/icomoon.min.css"
import "./lib/common.css"

import Vue from "vue/dist/vue.runtime.esm.js"
import VueRouter from "vue-router"

import App from "./App.vue"
import PageNotFound from "./pages/404.vue"
import HomePage from "./pages/index.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: HomePage,
        alias: [
            "/question/",
            "/article/",
            "/explore/"
        ]
    },
    // {
    //     path: "/user/:id",
    //     component: User
    // },
    // {
    //     path: "/user/:id",
    //     component: User
    // },
    {
        path: "*",  // 404
        component: PageNotFound
    }
]

/**
 * @param {import("../../../src/core").Init} init 
 */
export const ThemeWeCenter = (init) => {

    const ZettaForum = top.ZettaForum

    if (ZettaForum) {
        const { translate } = new ZettaForum.Translator(init.language)
        Vue.filter("translate", translate)
    } else {
        Vue.filter("translate", (str) => {
            return str
        })
    }

    const router = new VueRouter({
        mode: init.routerMode,
        routes
    })

    const vm = new Vue({
        el: init.el,
        router,
        components: {
            App
        },
        render: function (createElement) {
            return createElement("App", { ref: "App" })
        },
        provide() {
            return {
                init
            }
        }
    })

    return vm
}

export default ThemeWeCenter

if (top && top.ZettaForum) {
    top.ZettaForum.defineThemeName("wecenter", ThemeWeCenter)
}
