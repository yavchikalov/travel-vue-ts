<template lang="pug">
.layout-container
    slot
</template>

<script lang="ts">
export default {
    name: 'LayoutContainer'
};
</script>

<style lang="scss" scoped>
.layout-container {
    padding: 0 80px;
    margin: 0 auto;
    width: 100%;
}
</style>
