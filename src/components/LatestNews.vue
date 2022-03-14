<template lang="pug">
.latest-news
    router-link.latest-news__item(
        v-for="item in 3"
        :key="item"
        to="/"
    )
        h2.latest-news__item-title New visual identity for NFM
        .latest-news__item-content It is our pleasure to announce that we were working with National Forum of Music in Wrocław on developing a complex visual identity system.
        .latest-news__item-date 20.10.2020
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LatestNews'
});
</script>

<style lang="scss" scoped>
.latest-news {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    min-height: 290px;
    align-items: flex-end;
    // position: absolute;
    // top: -50px;
    margin-top: -130px;
    overflow: hidden;
    &__item {
        $item: &;
        background: #22252c;
        padding: 32px 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 160px;
        transition: height 0.4s;
        position: relative;
        text-decoration: none;
        &:hover {
            height: 290px;
            background: #8e8d33;
            #{$item}-content {
                opacity: 1;
                transition: opacity 0.4s 0.1s, transform 0.4s 0.1s;
                transform: translate(0, 0);
            }
            #{$item}-date {
                color: var(--color-white);
            }
        }
        &-title {
            font-size: 1.8rem;
            color: var(--color-white);
            margin-bottom: 16px;
        }
        &-content {
            color: var(--color-white);
            font-size: 1.2rem;
            letter-spacing: 0.5px;
            flex-grow: 1;
            opacity: 0;
            transition: opacity 0.6s, transform 0.6s;
            transform: translate(0, 20px);
        }
        &-date {
            position: absolute;
            bottom: 16px;
            left: 32px;
            color: var(--color-paco);
        }
    }
}
</style>
