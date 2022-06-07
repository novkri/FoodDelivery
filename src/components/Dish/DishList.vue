<template>
  <div class="dishes-list">
    <!--    todo if no dishes -->
    <transition-group name="list-transition">
      <DishCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="list-item"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, PropType, ref } from "vue";
import DishCard from "@/components/Dish/DishCard.vue";
import Dish from "@/types/Dish";

const props = defineProps({
  items: {
    required: true,
    type: Array as PropType<Dish[]>,
  },
});
</script>

<style scoped lang="scss">
.dishes-list {
  display: flex;
  flex-wrap: wrap;
  padding-top: 8px;
}

.list-item {
  transition: all 0.2s ease;
  width: calc(100% / 4 - (20px * 3));
  margin: 0 20px 20px 0;

  &:nth-child(4n) {
    margin-right: 0;
  }
}

.list-transition {
  border: 1px solid red;
}
.list-transition-move {
  transition: all 1s;
}
</style>
