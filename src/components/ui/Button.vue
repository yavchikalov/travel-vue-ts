<template lang="pug">
button.ui-button(
    @click="handleClick"
)
    slot
</template>

<script lang="ts">
export default {
    name: 'UIButton'
};
</script>

<script lang="ts" setup>

interface Emits {
    (e: 'click'): void
}

const props = defineProps<{
    disabled?: boolean
}>();

const emit = defineEmits<Emits>();

const handleClick = () => {
    if (!props.disabled) emit('click');
};

</script>

<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UIButton',
    emits: ['click'],
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, ctx) {
        const handleClick = () => {
            if (!props.disabled) ctx.emit('click');
        };

        return {
            handleClick
        };
    }
});
</script> -->

<style lang="scss" scoped>
</style>
