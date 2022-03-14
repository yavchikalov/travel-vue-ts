<template lang="pug">
header.header
    router-link.header__logo(
        to="/"
    )
        .header__logo-icon M
        .header__logo-text.pl-1 Meycas company
    .header__menu
        nav
            router-link.header__menu-link(
                to="/"
            ) menu
        .header__menu-button button
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LayoutHeader'
});
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
            transition: transform .5s .1s;
        }
    }
    &__menu {
        display: flex;
        align-items: center;
        &-button {
            height: 80px;
            width: 80px;
            border-left: 1px solid #e2e2eb;
        }
        &-link {
            padding: 0 32px;
        }
    }
}
</style>
