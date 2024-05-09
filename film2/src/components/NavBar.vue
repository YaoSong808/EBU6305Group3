<script setup lang="ts">
import { onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Chicken, Refresh, Warning, WarnTriangleFilled } from '@element-plus/icons-vue';
import { RouterLink, RouterView } from 'vue-router'

const isDark = useDark()
const toggleDark = useToggle(isDark)

onMounted(() => {
    // 获取汉堡按钮
    const burger = document.querySelector(".burger");
    // 获取导航菜单
    const navMenu = document.querySelector(".nav-menu");

    //获取菜单项
    const navMenuItems = document.querySelectorAll(".nav-menu li");

    if(burger != null) {
        // 注册监听
        burger.addEventListener("click", () => {
            // 汉堡按钮
            burger.classList.toggle("active");
            // 导航菜单开关
            if(navMenu != null)
                navMenu.classList.toggle("open");

            // 菜单项动画
            // navMenuItems.forEach((item: HTMLElement, index) => {
            //     // 如果已添加animation,先取消
            //     if (item.style.animation) {
            //         item.style.animation = "";
            //     } else {
            //         item.style.animation = '0.3s ease-in 0.3s 1 normal forwards running slideIn';
            //         // item.style.animationIterationCount = 'infinite';
            //         // item.style.opacity = '1';
            //         // item.style.animation = `slideIn 0.5s ease-in 0.4s infinite forwards `;
            //         // console.log(item.style.animation);
            //     }
            // });
        });
    }
})
</script>

<template>
    <div>
        <nav>
            <ul class="nav-menu">
                <li>
                    <el-switch @click="useToggle()" v-model="isDark" class="mt-2"
                        style="--el-switch-on-color: #2c2c2c; --el-switch-off-color: #d5c982" inline-prompt
                        active-icon="Moon" inactive-icon="Sunny" />
                </li>
                <li><router-link to="/info">Category</router-link></li>
                <li><router-link to="/types">Types</router-link></li>
                <li><router-link to="/theory">Theory</router-link></li>
            </ul>
            <div class="burger">
                <div class="top-line"></div>
                <div class="middle-line"></div>
                <div class="bottom-line"></div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.active-nav {
        color: #d8c489;
    }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PingFang SC", "Microsoft Yahei",
        sans-serif;
}


nav {
    // overflow: hidden;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* 左右padding */
    padding: 0 10px;
    width: 80%;
    height: 50px;
    margin: 0 auto;
    // background-color: rgba(47, 38, 33, 0.9);
    background-color: var(--el-navbg-color);
}

.logo {
    font-size: 24px;
    font-weight: 600;
    // color: #dadbdd;
    color: var(--el-text-color-primary);
    /* 占一半宽度 */
    flex: 1;
}

.nav-menu {
    /* 占令一半宽度 */
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* 最宽550px */
    // max-width: 550px;
}

.nav-menu li {
    list-style: none;
    // color: #dadbdd;
    color: var(--el-text-color-primary);
    font-weight: 600;
    display: flex;
    align-items: center;
    // animation: 0.3s ease-in 0.3s 1 normal forwards running slideIn;
    // animation-iteration-count: infinite;
    a {
        display: flex;
        align-items: center;
        .el-icon {
        font-size: 25px;
    }
    }
    
}

.burger div {
    /* 设置汉堡按钮三层条 */
    width: 25px;
    height: 3px;
    // background-color: #dadbdd;
    background-color: var(--el-text-color-primary);
    margin: 4px;
}

.burger {
    display: none;
}

/* 屏幕适配 */
@media screen and (max-width: 930px) {
    .burger {
        display: block;
        position: absolute;
        right: 20px;
    }

    /* 小屏幕菜单显示位置为右侧抽屉形式 */
    .nav-menu {
        position: absolute;
        top: 50px;
        right: 0;
        bottom: 0;
        width: 30vw;
        height: calc(100vh - 50px);

        // background-color: rgb(47, 38, 33, 0.9);
        background-color: var(--el-navbg-color);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        /* 动画 */
        transform: translateX(100%);
        
    }

    /* 菜单打开时，滑到初始位置 */
    .nav-menu.open {
        transform: translateX(0);
        transition: 0.4s ease-in-out;
    }

    /* 每个菜单项默认看不到，向右移动20象素 */
    .nav-menu li {
        /* 上下间距 */
        margin: 3vh;
        transform: translateX(20px);
        opacity: 0;
    }

    /* 汉堡按钮被点开时，设置按钮过渡 */
    .burger.active div {
        transition: 0.3s ease-in-out 0.3s;
    }

    /* 第一条线旋转45度 */
    .burger.active .top-line {
        transform: rotate(45deg) translate(4px, 6px);
    }

    /* 第三条线旋转-45度 */
    .burger.active .bottom-line {
        transform: rotate(-45deg) translate(4px, -6px);
    }

    /* 中间线向右移动并变为透明 */
    .burger.active .middle-line {
        opacity: 0;
        transform: translateX(10px);
        transition: 0.3s ease-in-out;
    }

    

}

@media screen and (max-width: 400px) {
    .nav-menu li .el-icon {
        font-size: 18px;
    }
}

@media screen and (max-width: 355px) {
    nav {
        font-size: 14px;
    }
}
</style>

<style>
/* 菜单项滑入动画 */
@keyframes slideIn {
    from {
        transform: translateX(20px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>