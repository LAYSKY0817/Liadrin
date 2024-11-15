<template>
    <div class="faq-page">
        <TopPictures :imageSrc="bannerimg" />
        <h1>Faq Page</h1>
        <p>This page displays content for Faq </p>
    </div>
</template>

<script>
import TopPictures from '../components/TopPic.vue';
import bannerimg from '@/assets/images/3.png';

export default {
    name: 'FaqPage',
    components: {
        TopPictures
    },
    data() {
        return {
            bannerimg,
        };
    }
};
</script>

<style scoped>
body {
    margin: 0;
    min-block-size: 100%;
    display: grid;
    place-content: center;
    background: #ffffff;/*fcf2ff*/
}
.faq-page{
    padding-top: 65px;
    text-align: center;
    width: 100vw;
    height: 100vh;
    color: black;
}
</style>
