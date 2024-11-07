<template>
    <footer class="footer">
        <div class="foot-container">
            <div class="footer-logo">
                <img src="./image/logo.jpg" alt="logo">
            </div>
            <div class="footer-copyright">
                <p>© 2024 LAYSKY. All Rights Reserved.</p>
            </div>
            <div class="footer-nav">
                <h3>导航</h3>
                <ul>
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/">关于xx</router-link></li>
                    <li><router-link to="/dowload">下载中心</router-link></li>
                    <li><router-link to="/faq">常见问题</router-link></li>
                    <li><router-link to="/contact">联系我们</router-link></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h3>联系我们</h3>
                <p>
                    地址：XX市XX路XX号XX大��
                    <br>
                    电话：000-0000-0000
                    <br>
                    邮箱：info@xx.com
                </p>
            </div>

            <div class="footer-qrcode">
                <h3>关注我们</h3>
                <img src='../assets/images/' alt="qrcode">
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 500px;
    background-color: #383838;
    color: #fff;
    padding: 40px 0;
    margin-top: 80px;
}
.footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap:20px;
    justify-content: center;
    margin: 0 auto;
}

.footer-logo {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer-logo img {
    width: 150px;
    margin-bottom: 10px;
}

.footer-nav,
.footer-contact{
    margin: 20px;
}

.footer-copyright {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer-nav h3,
.footer-contact h3,
.footer-qrcode h3 {
    margin-bottom: 15px;
    font-size: 18px;
    text-transform: uppercase;
}

.footer-nav ul {
    list-style: none;
    padding: 0;
}

.footer-nav li {
    margin-bottom: 10px;
}

.footer-nav li a {
    color: #fff;
    text-decoration: none;
}

.footer-nav li a:hover {
    text-decoration: underline;
}
.footer-qrcode {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer-qrcode img {
    width: 100px;
    height: 100px;
}
</style>