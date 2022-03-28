<template lang="pug">
.app
    LayoutHeader
    .app__right-side#right-side
    main
        LayoutContainer
            RouterView(
                v-slot="{ Component }"
            )
                Transition(
                    name="slide"
                    mode="out-in"
                )
                    component(
                        :is="Component"
                    )
    .app__left-side#left-side
    LayoutFooter
    #modals
</template>

<script lang="ts">
</script>

<script lang="ts" setup>
import LayoutHeader from '@/components/layouts/LayoutHeader.vue';
import LayoutFooter from '@/components/layouts/LayoutFooter.vue';
import LayoutContainer from '@/components/layouts/LayoutContainer.vue';
</script>

<style lang="scss">
@import "~assets/style/global.scss";
#app {
    height: 100%;
}
</style>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(100px);
}
.app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    // height: 100%;
    &__left-side {
        position: fixed;
        left: 0;
        z-index: 300;
        top: 80px;
        width: 80px;
        border-right: 1px solid #e2e2eb;
        height: 100%;
    }
    &__right-side {
        position: fixed;
        right: 0;
        z-index: 300;
        top: 80px;
        width: 80px;
        border-left: 1px solid #e2e2eb;
        height: 100%;
    }
}
main {
    flex-grow: 1;
}
</style>
