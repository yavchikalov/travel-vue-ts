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
            .popular-travel
                .popular-travel__title Исладия
                img.popular-travel__img(
                    src="https://mirjapan.ru/wp-content/uploads/2019/04/priroda1.jpg"
                )
            .popular-travel
                .popular-travel__title Исладия
                img.popular-travel__img(
                    src="https://oir.mobi/uploads/posts/2021-05/1622262892_61-oir_mobi-p-krasivie-vidi-prirodi-priroda-krasivo-foto-65.jpg"
                )
            .popular-travel
                .popular-travel__title Исладия
                img.popular-travel__img(
                    src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469601_nature_gora.jpg"
                )
            .popular-travel
                .popular-travel__title Исладия
                img.popular-travel__img(
                    src="https://bipbap.ru/wp-content/uploads/2017/07/morskie_peyzagi_krasivie_plyagi_foto_12.jpg"
                )
            .popular-travel
                .popular-travel__title Исладия
                img.popular-travel__img(
                    src="https://7oom.ru/wp-content/uploads/peizaji-01.jpg"
                )
            .popular-travel
                .popular-travel__title Исладия
                img.popular-travel__img(
                    src="https://novorab.ru/wp-content/uploads/2022/02/field-6574455_1920.jpg"
                )
    ContentBlock#contacts(
        title="Contacts"
    )
        .home__contacts
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro omnis nemo maiores ea incidunt esse voluptas fugiat labore, officia ex odio animi similique laborum officiis, sint inventore rerum. Impedit!
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro omnis nemo maiores ea incidunt esse voluptas fugiat labore, officia ex odio animi similique laborum officiis, sint inventore rerum. Impedit!
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import ContentBlock from '@/components/ContentBlock.vue';
import LatestNews from '@/components/LatestNews.vue';
import { TSetNavigationList } from '@/types/App';

const setNavigationList = inject<TSetNavigationList>('setNavigationList');

if (setNavigationList) {
    setNavigationList([
        { title: 'Latest News', anchor: 'news', block: 'end' },
        { title: 'Popular Travels', anchor: 'popular' },
        { title: 'Contacts', anchor: 'contacts' }
    ]);
}
</script>

<style lang="scss" scoped>
.popular-travels {
    display: grid;
    grid-template-areas:
        "a a ."
        "a a ."
        ". f f"
        ". f f";
    grid-gap: 16px;
}
.popular-travel {
    position: relative;
    cursor: pointer;
    &:after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        position: absolute;
        left: 0;
        top: 0;
        transition: background 0.3s ease-in;
        z-index: 10;
    }
    &:before {
        content: "";
        width: 60px;
        height: 60px;
        background: url("@/assets/icons/loupe.svg") center no-repeat;
        background-size: cover;
        position: absolute;
        left: calc(50% - 30px);
        top: calc(50% - 30px);
        z-index: 50;
        opacity: 0;
        transition: opacity 0.3s ease-in;
    }
    &:hover {
        &:after {
            background-color: rgba(0, 0, 0, 0.6);
        }
        &:before {
            opacity: 0.6;
        }
    }
    &__img {
        width: 100%;
        height: 100%;
    }
    &:first-child {
        grid-area: a;
    }
    &:last-child {
        grid-area: f;
    }
    &__title {
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 80px;
        color: var(--color-white);
        font-size: 2rem;
        display: flex;
        align-items: center;
        padding: 16px 24px;
    }
}

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
