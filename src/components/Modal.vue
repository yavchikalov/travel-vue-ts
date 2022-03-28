<template lang="pug">
Transition(
    name="slide"
    appear
)
    .modal(
        v-if="modelValue"
    )
        .modal__wrapper(
            :style="{ maxWidth }"
        )
            .modal__header
                slot(
                    name="header"
                    :close="handleClose"
                )
                    .pa-2
                        .modal__title {{ title }}
                        .modal__close.ml-4(
                            @click="handleClose"
                        )
                            img(
                                src="@/assets/icons/close.svg"
                            )
            .modal__content.pa-2
                slot
            Transition(
                name="fade"
                appear
            )
                .modal__actions.pa-2
                    slot(
                        name="actions"
                        :close="handleClose"
                    )
        .modal__overlay(
            @click="handleClose"
        )
</template>

<script lang="ts" setup>
interface IEmits {
    (e: 'update:modelValue', value: boolean): void
}

const emits = defineEmits<IEmits>();

withDefaults(
    defineProps<{
        modelValue: boolean;
        title: string;
        isCloseButton?: boolean;
        maxWidth?: string;
    }>(),
    {
        isCloseButton: true
    }
);

const handleClose = () => {
    emits('update:modelValue', false);
};

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}
.slide-enter-from {
    opacity: 0;
    transform: translateY(30px);
}
.slide-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
.modal {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 500;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &__wrapper {
        position: absolute;
        z-index: inherit;
        background: var(--color-white);
    }
    &__overlay {
        background: rgba(0, 0, 0, 0.5);
        width: inherit;
        height: inherit;
        position: absolute;
        height: calc(100% + 60px);
    }
    &__title {
        font-size: 1.4rem;
    }
    &__header {
        display: flex;
        align-items: center;
    }
    &__close {
        cursor: pointer;
        img {
            width: 24px;
        }
    }
    &__actions {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
