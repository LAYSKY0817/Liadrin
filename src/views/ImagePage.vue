<template>
    <div>
        <h1>Image Page {{ $route.params.id }}</h1>
        <p>This page displays content for Image {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
    name: 'ImagePage',
};
</script>
<style scoped>
div {
    padding: 30px;
    text-align: center;
    width: 100vw;
    height: 100vh;
    color: black;
}
</style>
