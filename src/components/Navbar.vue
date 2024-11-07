<template>
    <div class="navbar" ref="navbar">
        <div class="navbar-container">
            <button class="menu-icon" @click="toggleMenu">
                &#9776; 
            </button>
            <ul class="nav-links" :class="{ 'show-menu': isMenuOpen }">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/introduction">关于xx</router-link>
                </li>
                <li>
                    <router-link to="/download">下载中心</router-link>
                </li>
                <li>
                    <router-link to="/faq">常见问题</router-link>
                </li>
                <li>
                    <router-link to="/contact">联系我们</router-link>
                </li>
                <li>
                    <router-link to="/login">登录/注册</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarPage',
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        handleClickOutside(event) {
            // 如果点击的区域不是导航栏，并且菜单是展开状态，则关闭菜单
            if (this.isMenuOpen && !this.$refs.navbar.contains(event.target)) {
                this.isMenuOpen = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
};
</script>

<style scoped>
.navbar {
    background-color: #fdf8ff;
    color: #fcf2ff;
    padding: 20px 50px;
    position: fixed; /* 固定在顶部 */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;
}

.nav-links {
    display: flex;
    list-style: none; /* 移除列表样式 */
    gap: 50px;        /* 导航链接之间的间距 */
    padding: 0;       /* 清除默认内边距 */
    margin: 0;        /* 清除默认外边距 */
    transition: all 0.3s ease;
}

.nav-links a {
    color: rgb(100, 100, 100);
    text-decoration: none;
    font-size: 18px;
}

.nav-links a:hover {
    text-decoration: underline;
}

/* 三横杠菜单图标（默认隐藏，仅在小屏幕显示） */
.menu-icon {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}


@media (max-width: 900px) {
    .menu-icon {
        display: block;
        margin-left: auto;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px; /* 根据导航栏高度调整 */
        right: 20px;
        background-color: #fdf8ff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        padding: 10px;
        border-radius: 5px;
    }

    .nav-links.show-menu {
        display: flex;
    }

    .nav-links a {
        font-size: 16px;
        padding: 10px 0;
    }
}
</style>
