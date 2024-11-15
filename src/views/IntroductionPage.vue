<template>
    <div class="introduction-page">
        <TopPictures :imageSrc="bannerimg" />
        <h1>Introduction Page</h1>
        <p>This page displays content for IntroductionPage </p>
    </div>
</template>

<script>
import TopPictures from '../components/TopPic.vue';
import bannerimg from '@/assets/images/1.png';

export default {
    name: 'IntroductionPage',
    components: {
        TopPictures,
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

.introduction-page {
    padding-top: 65px;
    text-align: center;
    width: 100vw;
    height: 100vh;
    color: black;
}
</style>
