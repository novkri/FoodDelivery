<template>
  <div class="restaurants-list">
    <transition-group name="list-transition">
      <RestaurantCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="list-item"
        @click="chooseRestaurant(item)"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, PropType, ref } from "vue";
import RestaurantCard from "@/components/Restaurant/RestaurantCard.vue";
import Restaurant from "@/types/Restaurant";
import { useRouter } from "vue-router";

const props = defineProps({
  items: {
    required: true,
    type: Array as PropType<Restaurant[]>,
  },
});

const router = useRouter();

const chooseRestaurant = (item: Restaurant) => {
  console.log("chosen: ", item);
  //   go to this restaurant menu
  router.push({
    name: "menu",
    params: {
      // name: item.title,

      //todo routing
      id: item.id,
    },
  });
};
</script>

<style scoped lang="scss">
.restaurants-list {
  display: flex;
  justify-content: center;
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
