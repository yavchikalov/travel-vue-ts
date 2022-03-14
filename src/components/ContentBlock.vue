<template lang="pug">
.content-block
    .content-block__title-wrapper(
        v-if="title"
        :class="{'content-block__title-wrapper--right' : right, 'content-block__title-wrapper--pure': pure}"
    )
        router-link.content-block__title.content-block__title--link(
            v-if="to"
            :to="to"
        )
            span {{ title }}
            .content-block__title-icon
        .content-block__title(
            v-else
        ) {{ title }}
    .content-block__content
        slot
</template>

<script lang="ts" setup>
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
        text-decoration: none;
        background: #a8acb7;
        &:hover {
            #{$title}-icon {
                transform: translateX(10px);
            }
        }
        &--link {
            background: #30343c;
            align-items: center;
            justify-content: space-between;
        }
        &-icon {
            width: 10px;
            height: 18px;
            background-color: var(--color-white);
            mask: url('@/assets/icons/chevron.svg') no-repeat center;
            padding-left: 24px;
            transition: transform .3s ease-in-out;
            will-change: transform;
        }
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
