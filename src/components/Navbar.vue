<template>
    <div class="navbar" ref="navbar">
        <div class="navbar-container">
            <button class="menu-icon" @click="toggleMenu">
                &#9776; 
            </button>
            <ul class="nav-links" :class="{ 'show-menu': isMenuOpen }">
                <li>
                    <router-link to="/home" exact-active-class="active-link">首页</router-link>
                </li>
                <li>
                    <router-link to="/introduction" exact-active-class="active-link">关于xx</router-link>
                </li>
                <li>
                    <router-link to="/download" exact-active-class="active-link">下载中心</router-link>
                </li>
                <li>
                    <router-link to="/faq" exact-active-class="active-link">常见问题</router-link>
                </li>
                <li>
                    <router-link to="/contact" exact-active-class="active-link">联系我们</router-link>
                </li>
                <li>
                    <router-link to="/login" exact-active-class="active-link">登录</router-link>
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

    text-decoration: none;
    font-size: 18px;
    padding: 5px 1px;
    position: relative;
}

.nav-links a:hover {
    color:#7477c2;
}

.active-link{
    color: #7477c2;
    font-weight: bold;
}

.active-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom:-19px;
    width: 100%;
    height: 3px;
    background-color: #7477c2;
    border-radius: 2px;
}


.menu-icon {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}


@media (max-width: 800px) {
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
