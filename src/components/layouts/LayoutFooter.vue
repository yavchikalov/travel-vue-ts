<template lang="pug">
footer.footer
    LayoutContainer
        .footer__content
            .footer__copyright
                p © Joy Intermedia Sp. z o.o.
                p NIP: 894-304-10-92
                p KRS: 0000429505,
                p Sąd Rejonowy dla Wrocławia-Fabrycznej
                p VI Wydział Gospodarczy
            .footer__companies
                img.footer__company(
                    src="http://joyintermedia.com/img/logos/logo_stgu.svg"
                )
                img.footer__company(
                    src="http://joyintermedia.com/img/logos/logo_cp.svg"
                )
                img.footer__company(
                    src="http://joyintermedia.com/img/logos/logo_creativro.svg"
                )
</template>

<script lang="ts" setup>
import LayoutContainer from '@/components/layouts/LayoutContainer.vue';
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    z-index: 500;
    background: #22252c;
    padding: 32px 0;
    &__content {
        display: flex;
        padding: 0 32px;
    }
    &__copyright {
        margin-right: 32px;
        flex-basis: 300px;
        flex-shrink: 0;
        p {
            color: var(--color-white);
            padding: 4px 0;
        }
    }
    &__companies {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    &__company {
        max-width: 20%;
        width: 100%;
        opacity: .5;
        transition: opacity .3s linear;
        margin: 0 48px;
        min-width: 80px;
        &:hover {
            opacity: 1;
        }
    }
}
</style>
