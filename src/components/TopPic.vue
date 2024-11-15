<template>
    <div class="top-pic">
        <img :src="imageSrc" alt="top-pic" class="top-pic-img" />
    </div>
</template>

<script>
export default {
    name: "TopPic",
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.top-pic {
    padding: 0;
    margin: 0;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
.top-pic-img {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>