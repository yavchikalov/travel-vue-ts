<template lang="pug">
.layout-navigation
    .layout-navigation__item(
        v-for="item in list"
        :key="item.anchor"
    )
        .layout-navigation__item-icon N
        .layout-navigation__item-title {{ item.title }}
    .layout-navigation__item
</template>

<script lang="ts" setup>
import { IListItemProp } from '@/types/layouts/LayoutNavigation';

defineProps<{
    list: IListItemProp[]
}>();
</script>

<style lang="scss">
.layout-navigation {
    position: fixed;
    right: 0;
    z-index: 300;
    top: 80px;
    width: 80px;
    border-top: 1px solid #e2e2eb;
    // border-top: none;
    border-right: none;
    height: 100%;
    &:after {
        content: '';
        border-left: 1px solid #e2e2eb;
        position: absolute;
        left: 0;
        height: 100%;
        top: 0;
    }
    &__item {
        $item: &;
        position: relative;
        cursor: pointer;
        border-bottom: 1px solid #e2e2eb;
        z-index: 100;
        user-select: none;
        &-icon {
            position: relative;
            z-index: 100;
            background: var(--color-white);
            transition: background 0.3s ease-in;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            border-left: 1px solid #e2e2eb;
        }
        &:hover {
            #{$item}-title {
                transform: translateX(-100%);
            }
            #{$item}-icon {
                background: #e2e2eb;
            }
        }
        &-title {
            width: 360px;
            height: 100%;
            background: #30343c;
            font-weight: bold;
            position: absolute;
            z-index: 50;
            left: 0;
            top: 0;
            transform: translateX(0);
            transition: transform .5s .1s;
            display: flex;
            align-items: center;
            color: var(--color-white);
            padding: 32px;
            font-size: 1.2rem;
            text-transform: uppercase;
        }
    }
}
</style>
