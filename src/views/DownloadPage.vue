<template>
    <keep-alive>
    <div class="page-container">
        
            
            <CardsComponent />
        
    </div>
    </keep-alive>
</template>

<script>
import CardsComponent from '../components/CardsComponent.vue';


export default {
    name: 'HomePage',
    components: {
        CardsComponent,
        
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
    padding-top: 15dvh;
    background: #fefaff;/*fcf2ff*/
}
.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}



</style>
