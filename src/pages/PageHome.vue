<template lang="pug">
.home
    .home__image
        .home__latest-news
            ContentBlock#news(
                title="latest news"
                to="/"
                pure
            )
                LatestNews
    ContentBlock(
        title="about"
    )
        .home__about
            h3 We are creative agency.
            p Imagine yourself creating something exceptional. You take on challenges because they make you create the extraordinary. You influence the world around you. It becomes clear, friendly and legible and allows you to be more effective. That's how we create User Experience.
            p More often than ever you connect with people using online tools. Your website and visual identity are the base of many new relations. That's why it's so important for them to be carefully designed to communicate your values properly. Let us help you with that.
    ContentBlock#popular(
        title="Popular Travels"
    )
        .popular-travels
            PopularTravels
    ContentBlock#contacts(
        title="Contacts"
    )
        .home__contacts
            Contacts
    Teleport(
        to="#right-side"
    )
        LayoutNavigation(
            :list="navigationList"
        )
</template>

<script lang="ts" setup>
import ContentBlock from '@/components/ContentBlock.vue';
import LatestNews from '@/components/LatestNews.vue';
import LayoutNavigation, { IListItemProps } from '@/components/layouts/LayoutNavigation.vue';
import PopularTravels from '@/components/PopularTravels.vue';
import Contacts from '@/components/Contacts.vue';

const navigationList: IListItemProps[] = [
    { title: 'Latest News', anchor: 'news', block: 'end' },
    { title: 'Popular Travels', anchor: 'popular' },
    { title: 'Contacts', anchor: 'contacts' }
];

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
    &__about,
    &__contacts {
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
        bottom: 0;
    }
}
</style>
