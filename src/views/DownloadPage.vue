<template>
    <keep-alive>
    <div class="download-page">
        
            <TopPictures :imageSrc="bannerimg" />
            <CardsComponent />
        
    </div>
    </keep-alive>
</template>

<script>
import CardsComponent from '../components/CardsComponent.vue';
import TopPictures from '../components/TopPic.vue';
import bannerimg from '@/assets/images/2.png';

export default {
    name: 'HomePage',
    components: {
        TopPictures,
        CardsComponent,
        
        // NavbarPage,
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
    
    background: #fefaff;/*fcf2ff*/
}
.download-page {
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}



</style>
