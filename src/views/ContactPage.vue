<template>
    <div class="contact-page">
        <TopPictures :imageSrc="bannerimg" />
        <h1>Contact Page</h1>
        <p>This page displays content for ContactPage </p>
    </div>
</template>

<script>
import TopPictures from '../components/TopPic.vue';
import bannerimg from '@/assets/images/4.png';
export default {
    name: 'ContactPage',
    components: {
        TopPictures,
    },
    data() {
        return {
            bannerimg,
        };
    },
};
</script> 

<style scoped>
/* Global styles here */
body {
    margin: 0;
    min-block-size: 100%;
    display: grid;
    place-content: center;
    background: #ffffff;/*fcf2ff*/
}
.contact-page {
    padding-top: 65px;
    text-align: center;
    width: 100vw;
    height: 100vh;
    color: black;
}
</style>
