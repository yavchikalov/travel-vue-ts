<template lang="pug">
.home
    .home__image
        .home__latest-news
            ContentBlock(
                title="latest news"
                to="/"
                pure
            )
                LatestNews
    ContentBlock(
        v-for="key in 10"
        :key="key"
        title="about"
    )
        .home__about
            h3 We are creative agency.
            p Imagine yourself creating something exceptional. You take on challenges because they make you create the extraordinary. You influence the world around you. It becomes clear, friendly and legible and allows you to be more effective. That's how we create User Experience.
            p More often than ever you connect with people using online tools. Your website and visual identity are the base of many new relations. That's why it's so important for them to be carefully designed to communicate your values properly. Let us help you with that.
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import ContentBlock from '@/components/ContentBlock.vue';
import LatestNews from '@/components/LatestNews.vue';
import { TSetNavigationList } from '@/types/App';

const setNavigationList = inject<TSetNavigationList>('setNavigationList');

if (setNavigationList) {
    setNavigationList([
        { title: '123', anchor: '123' },
        { title: '321', anchor: '321' },
        { title: '321', anchor: '321' }
    ]);
}
</script>

<style lang="scss" scoped>
.home {
    &__image {
        width: 100%;
        height: calc(100vh - 80px);
        background: url("https://mirjapan.ru/wp-content/uploads/2019/04/priroda1.jpg")
            center / cover no-repeat;
        position: relative;
    }
    &__about {
        display: flex;
        flex-wrap: wrap;
        padding: 32px 0;
        h3 {
            flex-basis: 100%;
            margin-bottom: 32px;
            padding: 0 32px;
        }
        p {
            font-size: 1.4rem;
            flex-basis: 50%;
            padding: 0 32px;
        }
    }
    &__latest-news {
        width: 100%;
        position: absolute;
        bottom: 0
    }
}
</style>
