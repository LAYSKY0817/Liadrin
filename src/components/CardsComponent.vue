<template>
    <div class="cards">
        <div v-for="(item, index) in cards" :key="index" class="card"
            @click="item.type === 'text' && navigateToPage(index)" ref="cards">
            <div v-if="item.type === 'text'">TEXT {{ index + 1 }}</div>
            <img v-else :src="item.imgSrc" alt="Image" />
        </div>
    </div>
    <!-- 页面结束标识 div -->
    <div ref="pageEnd" class="page-end">页面结束————————</div>
</template>

<script>
export default {
    name: 'CardsComponent',
    data() {
        return {
            cards: [
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'image', imgSrc: './images/banner1.jpg' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'image', imgSrc: './images/banner2.jpg' },
                { type: 'image', imgSrc: './images/banner3.jpg' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'image', imgSrc: './images/banner4.jpg' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'image', imgSrc: './images/banner5.jpg' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'image', imgSrc: './images/MyMusicImage.jpg' },
                { type: 'text' },
                { type: 'text' },
                { type: 'image', imgSrc: './images/banner1.jpg' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
            ],
            
        };
    },
    methods: {
        navigateToPage(index) {
            this.$router.push({ name: 'TextPage', params: { id: index + 1 } });
        },
        
    },
};
</script>
<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

@keyframes slide-fade-in {
    from {
        opacity: 0;
        box-shadow: none;
        transform: scale(0.8) translateY(15vh);
    }
}

.cards {
    margin: auto;
    display: grid;
    gap: 2rem;
    grid-auto-flow: dense;
    grid-template-columns: repeat(4, 30ch);
    max-width: 1100px;
}

.card {
    animation: slide-fade-in both;
    animation-timeline: view();
    animation-range: contain 0% contain 50%;
    border-radius: 10px;
    line-height: 6;
    box-shadow: 0px 8px 20px #00000022;
    font-size: 32px;
    letter-spacing: 5px;
    color: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(to bottom right,
            #91defe,
            #99c0f9,
            #bdb6ec,
            #d7b3e3,
            #efb3d5,
            #f9bccc);
    display: flex;
    justify-content: center;
    align-items: center;
}

.card img {
    width: 100%;
    height: 100%;
}

.card:nth-of-type(4n) {
    grid-column: span 2;
}

.card:nth-of-type(5n) {
    grid-column: span 2;
}

.card:nth-of-type(7n) {
    grid-row: span 2;
}

</style>
