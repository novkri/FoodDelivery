<template>
  <!--  todo check sizes in description is too long (if it will be there) -->
  <div class="card">
    <div class="image">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
    </div>

    <div class="card__header">
      <p class="card__title">{{ item.title }}</p>
      <p class="card__description">{{ item.description }}</p>
    </div>
    <div class="card__rating">
      <img src="@/assets/star.svg" alt="star" />
      <span class="rating">{{ item.rating }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, PropType } from "vue";
import Restaurant from "@/types/Restaurant";

const props = defineProps({
  item: {
    required: true,
    type: Object as PropType<Restaurant>,
  },
});
</script>

<style scoped lang="scss">
.card {
  //border: 1px solid;
  border-radius: 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 3px 4px 16px 0px rgb(217 217 217 / 72%);
  overflow: hidden;

  &:hover {
    cursor: pointer;
    margin-top: -4px;
    margin-bottom: 24px;
    //todo shadow
    box-shadow: 5px 6px 15px 0px rgb(217 217 217);
  }

  //.image {

  //  height: 164px;
  //  border-radius: 16px 16px 0 0;
  //
  //  height: 70%;
  //}

  &__image {
    width: 100%;
    height: 164px;

    object-fit: cover;

    // todo ???
    //height: 100%;
    //object-fit: cover;
  }

  &__header {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    //padding: 2em;
    border-radius: 16px;
    background-color: #fff;
    height: 100%;
  }

  &__title {
    width: 100%;
    overflow: hidden;
    padding-right: 4px;

    font-size: 1em;
    color: #6a515e;
    max-width: 120px;
    margin-top: 8px;
  }

  &__rating {
    position: absolute;
    top: 2%;
    right: 2%;
    border-radius: 8px;
    padding: 10px;
    background-color: #fffaf5;
    min-width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;

    img {
      width: 13px;
      height: 18px;
      margin-right: 5px;
    }
  }

  &__description {
    text-align: left;
    padding: 0 25px 25px;
    margin: 0;
    color: #d7bdca;
    overflow: hidden;
  }
}
</style>
