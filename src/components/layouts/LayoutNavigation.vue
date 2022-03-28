<template lang="pug">
.layout-navigation
    .layout-navigation__item(
        v-for="item in list"
        :key="item.anchor"
        :class="{ 'layout-navigation__item--active': item.anchor === current }"
        @click="handleAchore(item.anchor, item.block)"
    )
        .layout-navigation__item-icon N
        .layout-navigation__item-title {{ item.title }}
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

export type TBlock = 'start' | 'center' | 'end';

export interface IListItemProps {
    title: string;
    anchor: string;
    block?: TBlock
}

const props = defineProps<{
    list: IListItemProps[]
}>();

const handleAchore = (anchor: string, block: TBlock = 'start') => {
    document.getElementById(anchor)?.scrollIntoView({ block, behavior: 'smooth' });
};

const current = ref('');

let observer: IntersectionObserver;

onMounted(() => {
    if (props.list.length) {
        observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entrie => {
                if (entrie.isIntersecting) {
                    const item = props.list.find(({ anchor }) => anchor === entrie.target.id);
                    if (item) current.value = item.anchor;
                }
            });
        }, {
            threshold: 0.5
        });

        props.list.forEach(item => {
            const target = document.getElementById(item.anchor);
            if (target) observer.observe(target);
        });
    }
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});
</script>

<style lang="scss">
.layout-navigation {
    // position: fixed;
    // right: 0;
    z-index: 300;
    border-top: 1px solid #e2e2eb;
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
        }
        &:hover {
            #{$item}-title {
                transform: translateX(-100%);
            }
            #{$item}-icon {
                background: #e2e2eb;
            }
        }
        &--active {
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
            transition: transform 0.5s 0.1s;
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
