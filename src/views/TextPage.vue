<template>
    <div>
        <h1>Text Page {{ $route.params.id }}</h1>
        <p>This page displays content for Text {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
    name: 'TextPage',
};
</script>

<style scoped>
div {

    color: black;
}
</style>
