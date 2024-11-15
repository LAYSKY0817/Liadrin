<template>
    <keep-alive>
    <div class="page-container">
        
            <PicCarouselComponent />
            <!-- <CardsComponent /> -->
        
    </div>
    </keep-alive>
</template>

<script>
import PicCarouselComponent from '../components/PicCarousel.vue';
// import CardsComponent from '../components/CardsComponent.vue';


export default {
    name: 'HomePage',
    components: {
        // CardsComponent,
        PicCarouselComponent,
        // NavbarPage,
    },
};
</script>

<style scoped>
body {
    margin: 0;
    min-block-size: 100%;
    display: grid;
    place-content: center;
    padding-top: 30vh;
    background: #fefaff;/*fcf2ff*/
}
.page-container {
    padding-top: 30vh;
    width: 100vw;
    height: 100vh;
    color: black;
    
}



</style>
