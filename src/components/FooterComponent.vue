<template>
    <footer id="footer">
        <!-- <div class="foot-container"> -->
        <div>

        </div>
        <div class="footer-logo">
            <img src="../assets/images/logo.jpg" alt="logo">
        </div>
        <div class="footer-copyright">
            <p>© 2024 LAYSKY. All Rights Reserved.</p>
        </div>
        <div class="footer-nav">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/introduction">关于XX</router-link></li>
                <li><router-link to="/download">下载中心</router-link></li>
                <li><router-link to="/faq">常见问题</router-link></li>
                <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
        </div>
        <div class="footer-contact">
            <h3>联系我们</h3>
            <p>
                地址：XX市XX路XX号XX大街
                <br>
                电话：000-0000-0000
                <br>
                邮箱：info@xx.com
            </p>
        </div>
        <div class="footer-qrcode">
            <h3>关注我们</h3>
            <img src='../assets/images/qrcode.jpg' alt="qrcode">
        </div>
        <div>

        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
};
</script>

<style scoped>

#footer {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
    width: 100vw;
    height: 300px;
    background-color: #383838;
    color: #ffffff;
    padding-top: 50px;
    margin-top: 50px;
}

.footer-logo {

    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer-logo img {
    width: 150px;
    margin-bottom: 10px;
}



.footer-contact{

    text-align: start;
}

.footer-copyright {
    text-align: start;

    justify-content: center;
    align-items: center;
}

.footer-nav {

    text-align: start;
    
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
    grid-template-columns: 4/5;
    text-align: start;
    justify-content: center;
    align-items: center;
}
.footer-qrcode img {
    width: 150px;
    height: 150px;
}
</style>