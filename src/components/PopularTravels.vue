<template lang="pug">
.popular-travels
    .popular-travels__item(
        v-for="item in 6"
        :key="item"
        @click="handleClickByTravel"
    )
        .popular-travels__item-title Исладия
        img.popular-travels__item-img(
            src="https://mirjapan.ru/wp-content/uploads/2019/04/priroda1.jpg"
        )
    Teleport(
        to="#modals"
    )
        Modal(
            v-model="isOpenModal"
            :title="selectedItem"
            @close="handleCloseModal"
        )
            template(
                #header
            )
                .popular-travels__modal-header
                    img(
                        src="https://mirjapan.ru/wp-content/uploads/2019/04/priroda1.jpg"
                    )
            .popular-travels__modal-content Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusamus, veritatis consequatur accusantium error sint aliquam incidunt itaque cupiditate laudantium id unde corrupti vel voluptate velit laborum qui sit optio.
            template(
                #actions="{ close }"
            )
                button(
                    @click="close"
                ) Подбробнее
                button(
                    @click="close"
                ) Подбробнее
                button(
                    @click="close"
                ) Подбробнее
                button(
                    @click="close"
                ) Подбробнее
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const selectedItem = ref('');
const isOpenModal = ref(false);

const handleClickByTravel = () => {
    selectedItem.value = 'qweqwe';
    isOpenModal.value = true;
};

const handleCloseModal = () => {
    selectedItem.value = '';
    isOpenModal.value = false;
};

</script>

<style lang="scss" scoped>
.popular-travels {
    display: grid;
    grid-template-areas:
        "a a ."
        "a a ."
        ". f f"
        ". f f";
    grid-gap: 16px;
    &__item {
        position: relative;
        cursor: pointer;
        &:after {
            content: "";
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0);
            position: absolute;
            left: 0;
            top: 0;
            transition: background 0.3s ease-in;
            z-index: 10;
        }
        &:before {
            content: "";
            width: 60px;
            height: 60px;
            background: url("@/assets/icons/loupe.svg") center no-repeat;
            background-size: cover;
            position: absolute;
            left: calc(50% - 30px);
            top: calc(50% - 30px);
            z-index: 50;
            opacity: 0;
            transition: opacity 0.3s ease-in;
        }
        &:hover {
            &:after {
                background-color: rgba(0, 0, 0, 0.6);
            }
            &:before {
                opacity: 0.6;
            }
        }
        &-img {
            width: 100%;
            height: 100%;
        }
        &:first-child {
            grid-area: a;
        }
        &:last-child {
            grid-area: f;
        }
        &-title {
            position: absolute;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 80px;
            color: var(--color-white);
            font-size: 2rem;
            display: flex;
            align-items: center;
            padding: 16px 24px;
        }
    }
    &__modal {
        &-content {
            max-width: 420px;
        }
        &-header {
            height: 200px;
            width: 100%;
            img {
                width: inherit;
                height: 100%;
            }
        }
    }
}
</style>
