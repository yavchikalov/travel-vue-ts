<template lang="pug">
header.header
    router-link.header__logo(
        to="/"
    )
        .header__logo-icon M
        .header__logo-text.pl-1 Meycas company
    .header__menu
        nav(
            v-show="isOpenMenu"
        )
            router-link.header__menu-link(
                v-for="(menuItem, menuKey) in menuList"
                :key="menuKey"
                :to="menuItem.route"
            ) {{ menuItem.title }}
        .header__menu-link(
            v-show="!isOpenMenu"
            @click="handleMenu"
        ) Menu
        .header__menu-button(
            @click="handleMenu"
        )
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const isOpenMenu = ref<boolean>(false);

const menuList = ref([
    {
        title: 'Contacts',
        route: '/'
    },
    {
        title: 'Blog',
        route: '/'
    },
    {
        title: 'About',
        route: '/'
    },
    {
        title: 'Works',
        route: '/'
    }
]);

const handleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
};

</script>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background: var(--color-white);
    z-index: 500;
    &__logo {
        $logo: &;
        position: relative;
        color: var(--color-white);
        text-decoration: none;
        font-size: 1.5rem;
        letter-spacing: 2px;
        &:hover {
            #{$logo}-text {
                transform: translateX(0%);
            }
        }
        &-icon {
            position: relative;
            background: #22252c;
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 200;
        }
        &-text {
            position: absolute;
            left: 80px;
            top: 0;
            width: 260px;
            height: 100%;
            background: #22252c;
            display: flex;
            align-items: center;
            z-index: 100;
            will-change: transform;
            transform: translateX(-100%);
            transition: transform 0.5s 0.1s;
        }
    }
    &__menu {
        display: flex;
        nav {
            display: flex;
        }
        &-button {
            height: 80px;
            width: 80px;
            border-left: 1px solid #e2e2eb;
            background: url("@/assets/icons/burger.svg") center no-repeat;
            cursor: pointer;
        }
        &-link {
            padding: 0 32px;
            color: #22252c;
            text-transform: uppercase;
            text-decoration: none;
            font-weight: bold;
            transition: opacity 0.2s linear;
            cursor: pointer;
            letter-spacing: 5px;
            display: flex;
            align-items: center;
            &:hover {
                opacity: 0.5;
            }
        }
    }
}
</style>
