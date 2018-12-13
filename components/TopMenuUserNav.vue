
<template>
    <div class="aw-user-nav">
        <!-- 登陆&注册栏 -->
        <!-- <a
                    class="login btn btn-normal btn-primary"
                    href="/account/login/"
                >登录</a>
                <a
                    class="register btn btn-normal btn-success"
                    href="/account/register/"
                >注册</a> -->
        <!-- end 登陆&注册栏 -->
        <a
            href="/people/xxx"
            class="aw-user-nav-dropdown"
        >
            <img
                alt=""
                :src="init.defaultAvatar"
            >

        </a>
        <div class="aw-dropdown dropdown-list pull-right">
            <ul class="aw-dropdown-list">
                <li class="hidden-xs">
                    <a href="/account/setting/profile/"><i class="icon icon-setting"></i> 设置</a>
                </li>
                <li>
                    <a href="/account/logout/"><i class="icon icon-logout"></i> 退出</a>
                </li>
            </ul>
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
}
</script>

<style>
    .aw-user-nav {
        position: relative;
        float: right;
        margin: 10px 0 10px 10px;
        margin: 10px 0 0 10px;
    }

    .aw-user-nav:hover .dropdown-list {
        display: block;
    }

    .aw-user-nav img {
        width: 32px;
        height: 32px;
    }

    .aw-user-nav .login {
        margin-right: 10px;
    }

    .aw-user-nav .aw-user-nav-dropdown {
        display: block;
        height: 42px;
    }

    .aw-user-nav .aw-user-nav-dropdown .badge {
        position: absolute;
        top: -8px;
        right: -8px;
    }

    .aw-user-nav .dropdown-list {
        top: 100%;
        width: 122px;
        border-top: none;
        border-radius: 0 0 4px 4px;
    }

    .aw-user-nav .dropdown-list ul li a i {
        vertical-align: -2px;
        margin-right: 5px;
        font-size: 16px;
    }

    .aw-user-nav > a img {
        border-radius: 4px;
    }

    /* iphone竖屏幕 */
    @media (max-width: 414px) {
        .aw-user-nav {
            margin-right: 10px;
        }
    }
</style>


