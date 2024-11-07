<template>
  <div id="app">
    <Navbar v-if="!$route.meta.hideNavbar"/>
    <router-view />
    <FooterComponent v-if="showFooter"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    FooterComponent,
  },
  computed: {
    showFooter() {
      return this.$route.name !== 'LoginPage';
    }
  }
};
</script>

<style>
/* Global styles here */
*{
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* 确保页面总高度为视口高度 */
}

/* router-view 区域应当弹性扩展占据空间 */
router-view {
  flex: 1;
  /* 使主体内容尽可能占据页面剩余空间 */
}

/* 确保页脚占据最底部 */
footer {
  width: 100%;
  /* 页脚的宽度应始终占满页面宽度 */
}
</style>
