<template lang="pug">
.app
    LayoutHeader
    LayoutNavigation(
        :list="navigationList"
    )
    main
        LayoutContainer
            router-view
    .app__left-side
    LayoutFooter
</template>

<script lang="ts">
</script>

<script lang="ts" setup>
import { ref, provide } from 'vue';
import { IListItemProp } from '@/types/layouts/LayoutNavigation';

import LayoutHeader from '@/components/layouts/LayoutHeader.vue';
import LayoutFooter from '@/components/layouts/LayoutFooter.vue';
import LayoutNavigation from '@/components/layouts/LayoutNavigation.vue';
import LayoutContainer from '@/components/layouts/LayoutContainer.vue';

const navigationList = ref<IListItemProp[]>([]);

const setNavigationList = (list: IListItemProp[]) => {
    navigationList.value = list;
};

provide('setNavigationList', setNavigationList);
</script>

<style lang="scss">
@import "~assets/style/global.scss";
#app {
    height: 100%;
}
</style>

<style lang="scss" scoped>
.app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
}
main {
    flex-grow: 1;
}
</style>
