<template>
    <div class="auth-wrapper">
        <div class="auth-container">
        <!-- 左半部分，纯色背景 -->
        <div class="auth-left">
            <h2>欢迎回来！</h2>
        </div>

        <!-- 右半部分，表单 -->
        <div class="auth-right">
            <div class="auth-right-content">
            <h2>账号登录</h2>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                <label for="username">账号</label>
                <input
                    type="text"
                    id="username"
                    v-model="username"
                    required
                    placeholder="请输入手机号/邮箱地址/账户名"
                />
                </div>

                <div class="form-group password-group">
                <label for="password">密码</label>
                <div class="password-wrapper">
                    <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    v-model="password"
                    required
                    placeholder="请输入密码"
                    />
                    <button
                    type="button"
                    class="toggle-password"
                    @click="togglePasswordVisibility"
                    >
                    <font-awesome-icon :icon="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" />
                    </button>
                </div>
                </div>

                <button type="submit" class="submit-btn">登录</button>
            </form>

            <!-- 链接 -->
            <div class="switch-auth">
                <p>
                <router-link to="/register">注册</router-link> |
                <router-link to="/forgot-password">忘记密码</router-link> |
                <router-link to="/help">遇到问题</router-link>
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
        username: '',
        password: '',
        showPassword: false, // 用于跟踪密码的可见状态
        };
    },
    methods: {
        handleLogin() {
        // 登录逻辑
        if (this.username && this.password) {
            console.log('登录成功:', { username: this.username, password: this.password });
            // 跳转到首页或其他页面
            this.$router.push('/');
        } else {
            alert('请输入用户名和密码');
        }
        },
        togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
        },
    },
};
</script>

<style scoped>
/* 外层包装容器，让内容始终居中 */
.auth-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    margin: 10vh auto;
}

/* 登录卡片容器，设置为水平排列 */
.auth-container {
    display: flex;
    width: 1000px; /* 整个卡片的宽度 */
    height: 450px; /* 整个卡片的高度 */
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden; /* 隐藏溢出的部分 */
    box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);
}

/* 左半部分样式 */
.auth-left {
    flex: 1; /* 占据一半的空间 */
    background-color: #4caf50; /* 纯色背景，可根据需要修改 */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-left h2 {
    font-size: 32px;
    
}

/* 右半部分样式 */
.auth-right {
    flex: 1; /* 占据另一半空间 */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 内部容器，添加 padding */
.auth-right-content {
    padding: 60px;
    width: 100%;
}

.auth-right-content h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #000000;
}

.form-group {
    margin-bottom: 15px;
    position: relative; /* 为了定位眼睛图标 */
}

label {
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
    color: #000000;
}

input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid rgb(3, 3, 3)000;
}

/* 密码输入框和眼睛图标的容器 */
.password-group {
    position: relative;
}

.toggle-password {
    position: absolute;
    right: 10px;
    top: 35px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #000000;
}

.toggle-password:focus {
    outline: none;
}

button.submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
}

button.submit-btn:hover {
    background-color: #45a049;
}

.switch-auth {
    text-align: center;
    margin-top: 15px;
}

/* 链接样式 */
.switch-auth a {
    color: #4caf50;
    text-decoration: none;
    margin: 0 5px;
}

.switch-auth a:hover {
    text-decoration: underline;
}
.password-group {
    position: relative;
}

.password-wrapper {
    position: relative;
}

.password-wrapper input {
    width: 100%;
    padding-right: 40px; /* 为按钮留出空间 */
}

.toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #000000;
}

.toggle-password:focus {
    outline: none;
}
/* 隐藏 Chrome 和 Edge 中的浏览器内置眼睛图标 */
input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear,
input[type="password"]::-webkit-credentials-auto-fill-button,
input[type="password"]::-webkit-textfield-decoration-container {
    display: none;
}

</style>
