<template>
  <div class="card">
    <div class="image">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
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
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus
        dolorem, quam qui quisquam voluptatum.
      </p>
      <button class="add-button">В корзину</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import Dish from "@/types/Dish";

export default defineComponent({
  name: "DishCard",
  props: {
    item: {
      required: true,
      type: Object as PropType<Dish>,
    },
  },
  setup() {
    const isDescriptionShow = ref(false);

    const showDescription = () => {
      isDescriptionShow.value = true;
    };

    const hideDescription = () => {
      isDescriptionShow.value = false;
    };

    return {
      isDescriptionShow,
      showDescription,
      hideDescription,
    };
  },
});
</script>

<style scoped lang="scss">
// todo пока что такие же стили как и у карточки ресторана
.card {
  //border: 1px solid;
  border-radius: 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 3px 4px 16px 0px rgb(217 217 217 / 72%);
  overflow: hidden;

  //.image {
  //  background-color: #76acfb;
  //  height: 164px;
  //  border-radius: 16px 16px 0 0;
  //}

  &__image {
    width: 100%;
    height: auto;
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
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em;
    border-radius: 16px;
    background-color: #fff;
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
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
    //flex-direction: column;
  }

  &__description {
    padding: 0 2em 2em;
    margin: 0;
    color: #d7bdca;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .add-button {
    padding: 15px;
    background-color: #66cb9f;
    color: white;
    margin-bottom: 10px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      background-color: rgb(56, 211, 144);
    }
  }
}
</style>
