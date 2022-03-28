<template lang="pug">
.page-travels
    .page-travels__list
        template(
            v-for="key in 10"
            :key="key"
        )
            .page-travels__item
                img.page-travels__item-img(
                    src="http://joyintermedia.com/img/cases/mini/nfm.png"
                )
                .page-travels__item-content.pa-3
                    .page-travels__item-content-title Branding
                    .page-travels__item-content-description.mt-3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nulla voluptate saepe nostrum nihil sunt soluta excepturi veritatis itaque
                    .page-travels__item-content-button
                        UIButton(
                            to="/"
                            @click="handleClick"
                        )  Go
    p(
        v-for="key in 30"
        :key="key"
    ) Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam quisquam recusandae explicabo quia hic quaerat, reprehenderit quos distinctio, ullam magnam beatae? Architecto, labore ipsam. Illo aperiam facere magnam exercitationem.
</template>

<script lang="ts" setup>
import UIButton from '@/components/ui/UIButton';

const handleClick = () => {
    console.warn('handleClick');
};

</script>

<style lang="scss" scoped>
.page-travels {
    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1px;
        position: relative;
    }
    &__item {
        $item: &;
        position: relative;
        overflow: hidden;
        &-img {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 100;
        }
        &-content {
            background-color: #e8e8f2;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-100%, -100%);
            transition: transform 200ms linear;
            will-change: auto;
            &-title {
                font-weight: bold;
                color: #22252c;
                font-size: 1.4rem;
            }
            &-button {
                // background: #30343c;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                // height: 80px;
                transform: translate(0%, 100%);
                transition: all 200ms linear 200ms;
                z-index: 100;
                visibility: hidden;
            }
        }
        &:hover {
            #{$item}-content {
                transform: translate(0%, 0%);
                pointer-events: auto;
                &-button {
                    transform: translate(0%, 0%);
                    visibility: visible;
                }
            }
        }
    }
    &__overlay {
        background-color: #e8e8f2;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
