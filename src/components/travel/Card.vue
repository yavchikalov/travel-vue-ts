<template lang="pug">
.travel-card
    img.travel-card__image(
        :src="image"
        alt=""
    )
    .travel-card__title {{ title }}
    .travel-card__description {{ description }}
</template>

<script lang="ts">
export default {
    name: 'TravelCard'
};
</script>

<script lang="ts" setup>
interface Props {
    image: string;
    title: string;
    description: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.travel-card {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 16px;
    box-shadow: 0px 0px 10px 0px var(--color-abbey);
    border-radius: 16px;
    &__image {
        width: 100%;
        grid-row-start: 1;
        grid-row-end: 3;
        border-radius: 16px;
    }
    &__title {
        font-size: 1.25rem;
        padding: 8px 16px 0 0;
    }
    &__description {
        font-size: .75rem;
        padding: 0 16px 8px 0;
    }
}
</style>
