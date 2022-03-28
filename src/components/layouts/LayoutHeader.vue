<template lang="pug">
header.header
    router-link.header__logo(
        to="/"
    )
        .header__logo-icon M
        .header__logo-text.pl-1 Meycas company
    .header__menu(
        :class="{ 'header__menu--open': isOpenMenu }"
    )
        nav.header__menu-nav
            TransitionGroup(
                name="link"
                mode="out-in"
                appear
            )
                .header__menu-item(
                    v-for="(menuItem, menuKey) in menuList"
                    v-show="isOpenMenu"
                    :key="menuKey"
                )
                    router-link.header__menu-link(
                        :to="{ name: menuItem.route }"
                        @click="isOpenMenu = !isOpenMenu"
                    ) {{ menuItem.title }}
                .header__menu-item.header__menu-item--section(
                    v-show="!isOpenMenu"
                    key="section"
                    @click="handleMenu"
                )
                    .header__menu-link {{ $route?.name || 'Menu' }}
    .header__button(
        @click="handleMenu"
    )
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const isOpenMenu = ref<boolean>(false);

const menuList = ref([
    {
        title: 'Create',
        route: 'Create'
    },
    {
        title: 'Travels',
        route: 'Travels'
    },
    {
        title: 'About',
        route: 'Home'
    },
    {
        title: 'Works',
        route: 'Home'
    }
]);

const handleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
};

</script>
<style lang="scss" scoped>
.link-leave-active {
    transition: all 0.3s ease;
}
.link-enter-active {
    transition: all 0.3s ease;
}
.link-enter-from,
.link-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.link-enter-active.header__menu-item--section {
    transition-delay: 0s !important;
}

.header {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background: var(--color-white);
    z-index: 100;
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
    &__button {
        height: 80px;
        width: 80px;
        border-left: 1px solid #e2e2eb;
        background: url("@/assets/icons/burger.svg") center no-repeat;
        cursor: pointer;
    }
    &__menu {
        $menu: &;
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        &-item {
            color: #22252c;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
            letter-spacing: 5px;
            will-change: auto;
        }
        &-link {
            padding: 0 32px;
            color: inherit;
            text-decoration: none;
            transition: opacity 0.3s linear;
            display: flex;
            height: 100%;
            align-items: center;
            &:hover {
                opacity: 0.5;
            }
        }
        &-nav {
            display: flex;
            #{$menu}-item {
                &:nth-child(1) {
                    transition-delay: 500ms;
                }
                &:nth-child(2) {
                    transition-delay: 450ms;
                }
                &:nth-child(3) {
                    transition-delay: 400ms;
                }
                &:nth-child(4) {
                    transition-delay: 350ms;
                }
            }
        }
    }
}
</style>
