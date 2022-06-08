<template>
  <div class="card">
    <div class="image">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
    </div>

    <div class="card__header">
      <p class="card__title">{{ item.title }}</p>
      <p class="card__description">{{ item.description }}</p>
    </div>
    <div class="card__rating">
      <img src="@/assets/img/star.svg" alt="star" />
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
@import "@/assets/styles/card.scss";
</style>
