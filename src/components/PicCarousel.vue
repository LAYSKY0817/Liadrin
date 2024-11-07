<template>
    <div class="carousel">
        <!-- 图片展示区域 -->
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(image, index) in images" :key="index" class="carousel-slide">
                <img :src="image.url" alt="carousel image" />
            </div>
        </div>

        <!-- 左右导航按钮 -->
        <button class="carousel-button left" @click="prevSlide">‹</button>
        <button class="carousel-button right" @click="nextSlide">›</button>

        <!-- 图片标题和背景颜色 -->
        <div class="carousel-footer" :style="{ backgroundColor: currentImage.color }">
            <p>{{ currentImage.title }}</p>
        </div>

        <!-- 底部指示器 -->
        <div class="carousel-indicators">
            <span v-for="(image, index) in images" :key="index" class="indicator"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PicCarousel',
    data() {
        return {
            currentIndex: 0, // 当前显示的图片索引
            images: [
                { url: './images/banner1.jpg', title: '11111111111111111111', color: 'rgb(222,111,25)' },
                { url: './images/banner2.jpg', title: '22222222222222222222', color: 'rgb(113,23,44)' },
                { url: './images/banner3.jpg', title: '33333333333333333333', color: 'rgb(234,75,46)' },
                { url: './images/banner4.jpg', title: '44444444444444444444', color: 'rgb(35,52,56)' },
                { url: './images/banner5.jpg', title: '55555555555555555555', color: 'rgb(75,125,45)' },
            ],
            intervalId: null, // 定时器ID
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        },
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeUnmount() {
        this.stopAutoSlide();
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
        startAutoSlide() {
            this.intervalId = setInterval(this.nextSlide, 3000); // 每3秒切换一次
        },
        stopAutoSlide() {
            clearInterval(this.intervalId);
            this.intervalId = null;
        },
    },
};
</script>

<style scoped>
.carousel {
    position: relative;
    width: 100%;
    /* 视口宽度的80% */
    height: 50vh;
    /* 视口高度的50% */
    max-width: 1100px;
    overflow: hidden;
    margin: auto;
    margin-bottom: 50px;
}
.carousel-track {
    width: 100%;
    display: flex;
    transition: transform 0.6s ease;
}
.carousel-footer
{
    height: 70px;
    background-color: rgb(100, 67, 68);
    padding: 12px 12px 0 12px;
    position: relative;
}
.carousel-footer p{
    margin: auto;
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
}
.carousel-slide {
    min-width: 100%;
    height: 400px;
}

.carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(17, 12, 12, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    padding: 0.5em 0.75em;
    cursor: pointer;
    transition: background 0.3s;
}

.carousel-button:hover {
    background: rgba(0, 0, 0, 0.7);
}

.carousel-button.left {
    left: 10px;
}

.carousel-button.right {
    right: 10px;
}

.carousel-indicators {
    position: absolute;
    margin: auto;
    padding: 0;
    align-items: center;
    bottom: 37px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
}

.indicator {
    width: 10px;
    height: 10px;
    background: #ddd;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
}

.indicator.active,
.indicator:hover {
    background: #333;
}
</style>
