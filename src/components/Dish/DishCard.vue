<template>
  <div class="card">
    <div class="image">
      <img
        v-if="item?.image"
        :src="item.image"
        class="card__image"
        alt="image"
      />
      <img v-else src="@/assets/img/empty.jpg" alt="logo" class="card__image" />
    </div>
    <div class="card__overlay">
      <div class="card__header">
        <p class="card__title">{{ item.title }}</p>
        <div class="card__subtitle">
          <span v-if="item?.weight" class="weight">{{ item.weight }} гр</span>
          <span v-if="item?.calories" class="calories"
            >{{ item.calories }} ккал</span
          >
        </div>
      </div>
      <p v-if="item.description" class="card__description">
        {{ item.description }}
      </p>
      <button class="add-button action-btn" @click="addToCart(item)">
        В корзину
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, inject, PropType, ref } from "vue";
import Dish from "@/types/Dish";
import { useMainStore } from "@/store";

const props = defineProps({
  item: {
    required: true,
    type: Object as PropType<Dish>,
  },
});

const store = useMainStore();

const restaurantRouteId = inject<number>("restaurantId");

const addToCart = (item: Dish) => {
  if (store.getOrderLength > 0 && store.getRestaurantId !== restaurantRouteId) {
    store.clear();
  }

  store.setRestaurant(restaurantRouteId as number);
  store.addDish(item);
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/card.scss";

.card {
  &:hover {
    box-shadow: 3px 4px 16px 0px rgb(217 217 217 / 72%);
    margin-top: 0;
    margin-bottom: 20px;
  }

  .image {
    height: 100%;
  }

  &__image {
    height: 85%;
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: calc(var(--curve) * 1px);
    background-color: #fff;
    transform: translateY(100%);
    transition: 0.2s ease-in-out;
  }

  &:hover .card__overlay {
    transform: translateY(0);
  }

  &__header {
    position: relative;
    padding: 1.8em;
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
    display: flex;
    flex-direction: row;
  }

  &:hover .card__header {
    transform: translateY(0);
  }

  &__title {
    font-size: 1em;
    color: #6a515e;
    max-width: 120px;
  }

  &__subtitle {
    display: flex;
    font-weight: 300;
  }

  &__description {
    padding: 0 2em 2em;
    margin: 0;
    color: #d7bdca;
  }

  .add-button {
    background-color: #66cb9f;
    margin-bottom: 10px;

    &:hover {
      background-color: rgb(56, 211, 144);
    }
  }
}
</style>
