<template lang="pug">
.content-block
    .content-block__title-wrapper(
        v-if="title"
        :class="{ 'content-block__title-wrapper--right': right, 'content-block__title-wrapper--pure': pure }"
    )
        UIButton.content-block__button.pa-4(
            v-if="to"
            :to="to"
        ) {{ title }}
        .content-block__title(
            v-else
        ) {{ title }}
    .content-block__content
        slot
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const UIButton = defineAsyncComponent(() => import('@/components/ui/UIButton.vue'));

defineProps<{
    title: string,
    to?: string,
    pure?: boolean,
    right?: boolean
}>();
</script>

<style lang="scss" scoped>
.content-block {
    position: relative;
    z-index: 1;
    scroll-margin-top: 80px;
    &__title {
        $title: &;
        height: 80px;
        font-weight: bold;
        color: var(--color-white);
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        display: inline-flex;
        align-items: center;
        padding: 32px;
        min-width: 280px;
        max-width: 30%;
        width: 100%;
        text-decoration: none;
        background: #a8acb7;
    }
    &__button {
        height: 80px;
        min-width: 280px;
        max-width: 30%;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 32px;
    }
    &__title-wrapper {
        background: #e8e8f2;
        display: flex;
        &--right {
            justify-content: flex-end;
        }
        &--pure {
            background: none;
        }
    }
}
</style>
