<template lang="pug">
RouterLink.ui-button.pa-2(
    v-if="to"
    :to="to"
)
    span
        slot
    .ui-button__to-icon.ml-3
button.ui-button.pa-2(
    v-else
    @click="handleClick"
)
    slot
</template>

<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router';

interface Emits {
    (e: 'click'): void
}

const props = defineProps<{
    disabled?: boolean,
    to?: RouteLocationRaw
}>();

const emit = defineEmits<Emits>();

const handleClick = () => {
    if (!props.disabled) emit('click');
};

</script>

<style lang="scss" scoped>
.ui-button {
    $root: &;
    font-weight: bold;
    color: var(--color-white);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    width: inherit;
    text-decoration: none;
    justify-content: space-between;
    border: 0;
    background: #30343c;
    cursor: pointer;
    font-size: inherit;
    &:hover {
        #{$root}__to-icon {
            transform: translateX(10px);
        }
    }
    &__to-icon {
        width: 10px;
        height: 18px;
        background-color: var(--color-white);
        mask: url("@/assets/icons/chevron.svg") no-repeat center;
        transition: transform 0.3s ease-in-out;
        will-change: transform;
    }
}
</style>
