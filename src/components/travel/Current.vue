<template lang="pug">
.current-travel
    .current-travel-title {{ title }}
    .current-travel-positions
        .current-travel-positions-group
            .current-travel-positions-title Текущая позиция:
            .current-travel-positions-value {{ currentPosition }}
        .current-travel-positions-group
            .current-travel-positions-title Следующая позиция:
            .current-travel-positions-value {{ nextPosition }}
</template>

<script lang="ts">
export default {
    name: 'TravelCurrent'
};
</script>

<script lang="ts" setup>
interface Props {
    title: string,
    currentPosition: string,
    nextPosition: string
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.current-travel {
    &-title {
        font-size: 2rem;
        color: #a36125;
        margin-bottom: 16px;
    }
    &-positions {
        display: flex;
        align-items: center;
        &-group:first-child {
            margin-right: 40px;
        }
        &-title {
            font-size: .875rem;
        }
        &-value {
            color: #a36125;
            font-size: 1.2rem;
        }
    }
}
</style>
