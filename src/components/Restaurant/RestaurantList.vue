<template>
  <div class="restaurants-list">
    <transition-group name="list-transition">
      <RestaurantCard
        v-for="item in data"
        :key="item.id"
        :item="item"
        class="list-item"
        @click="chooseRestaurant(item)"
      />
    </transition-group>
  </div>
</template>

<script async setup lang="ts">
import RestaurantCard from "@/components/Restaurant/RestaurantCard.vue";
import Restaurant from "@/types/Restaurant";
import { useRouter } from "vue-router";
import { useFetch } from "@/assets/composables/fetch";

const router = useRouter();

const chooseRestaurant = (item: Restaurant) => {
  router.push({
    name: "menu",
    params: {
      id: item.id,
    },
  });
};

const { data, error } = useFetch<Restaurant>(
  "http://localhost:3000/restaurants"
);
</script>

<style scoped lang="scss">
.restaurants-list {
  display: flex;
  flex-wrap: wrap;
  padding-top: 8px;
}

.list-item {
  transition: all 0.2s ease;
  width: calc(100% / 4 - (20px * 3 / 4));
  margin: 0 20px 20px 0;

  &:nth-child(4n) {
    margin-right: 0;
  }
}
</style>
