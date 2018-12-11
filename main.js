/**
 * ZettaForum 泽虵论坛
 * @ZettaForum/Theme-WeCenter
 * @author Xmader
 * @copyright Copyright (c) 2018 Xmader.
 * @license MIT
 */

import "./lib/bootstrap.css"
import "./lib/icon.css"
import "./lib/common.css"

import Vue from "vue/dist/vue.runtime.esm.js"
import VueRouter from "vue-router"

import App from "./App.vue"

Vue.use(VueRouter)

const routes = [
    // {
    //     path: "/user/:id",
    //     component: User
    // },
    // {
    //     path: "/user/:id",
    //     component: User
    // },
    // {
    //     path: "*",  // 404
    //     component: NotFoundComponent
    // }
]

/**
 * @param {import("../../../src/core").Init} init 
 */
export const ThemeWeCenter = (init) => {

    if (top.ZettaForum) {
        const { translate } = new top.ZettaForum.Translator(init.language)
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

if (top.ZettaForum) {
    top.ZettaForum.defineThemeName("wecenter", ThemeWeCenter)
}


const _UNIT_TEST = () => {  // eslint-disable-line

    let init = {
        el: "#app",
        name: "test",
        language: "zh_CN",
        logo: "lib/img/logo.png"
    }

    init = Object.assign({
        theme: "wecenter",
        language: "zh_CN",
        logo: "logo.png"
    }, init)

    ThemeWeCenter(init)
}

_UNIT_TEST()
