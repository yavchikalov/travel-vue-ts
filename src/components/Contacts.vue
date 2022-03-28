<template lang="pug">
.contacts
    .contacts__left.px-2
        .contacts__left-text Get in touch with MeyCas
        .contacts__left-social
            a.contacts__social.contacts__social-fb(
                href="#"
            ) f
            a.contacts__social.contacts__social-twitter(
                href="#"
            ) t
            a.contacts__social.contacts__social-youtube(
                href="#"
            ) y
    .contacts__right.px-2
        .contacts__right-description.mb-4 Our offices are thousands of kilometers apart. Each kilometer is a new idea, acquaintance and an inspiring conversation. It's a combination of different worlds and cultures resulting in unusual solutions. Let us inspire you by visiting one of our locations.
        .contacts__right-addresses
            .contacts__address(
                v-for="key in 3"
                :key="key"
            )
                .contacts__address-name.mb-3 Wrocław (HQ)
                .contacts__address-location.mb-2 ul. Strońska 2a/7 50-540 Wrocław Poland
                .contacts__address-email.mb-1 biuro@joyintermedia.com
                .contacts__address-phone.mb-3 +48 690 833 833
                a.contacts__address-map(
                    href="#"
                ) view on map
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.contacts {
    display: flex;
    &__left {
        flex-basis: 30%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-text {
            font-size: 3rem;
        }
        &-social {
            display: flex;
            grid-gap: 16px;
        }
    }
    &__right {
        &-addresses {
            display: flex;
            grid-gap: 32px;
            flex-wrap: wrap;
        }
    }
    &__address {
        flex-basis: 180px;
        flex-shrink: 1;
        flex-grow: 1;
        &-name {
            font-size: 1.2rem;
            font-weight: bold;
        }
        &-map {
            text-transform: uppercase;
            text-decoration: none;
            color: inherit;
        }
    }
    &__social {
        width: 40px;
        height: 40px;
        background: var(--color-black);
        color: var(--color-white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 50%;
        text-decoration: none;
    }
}
</style>
