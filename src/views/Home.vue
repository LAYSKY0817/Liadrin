<template>
    <div class="page-container">
        
        <PicCarouselComponent />
        <CardsComponent />

    </div>
</template>

<script>
import PicCarouselComponent from '../components/PicCarousel.vue';
import CardsComponent from '../components/CardsComponent.vue';
// import NavbarPage from '../components/Navbar.vue'; // 导入 Navbar 组件

export default {
    name: 'HomePage',
    components: {
        CardsComponent,
        PicCarouselComponent,
        // NavbarPage,
    },
};
</script>

<style >
/* Global styles here */
body {
    margin: 0;
    min-block-size: 100%;
    display: grid;
    place-content: center;
    padding-block: 15dvh;
    background: #fefaff;/*fcf2ff*/
}
.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}



</style>
