<template>
  <div>
    <div class="link-wrapper">
      <button class="go-back-link" @click="goBack">&lt; Все рестораны</button>
    </div>

    <div v-if="isLoading"></div>
    <div v-else>
      <h1 class="restaurant-name" v-if="currentRestaurant">
        {{ currentRestaurant.title }}
      </h1>
      <div v-if="data.length === 0">No data</div>
      <DishList v-else :items="data" />
    </div>
  </div>

  <ShoppingCart />
</template>

<script setup lang="ts">
import { defineProps, onMounted, provide, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ShoppingCart from "@/components/ShoppingCart.vue";
import DishList from "@/components/Dish/DishList.vue";
import { useFetch } from "@/assets/composables/fetch";
import Dish from "@/types/Dish";
import { useCurrentRestaurant } from "@/assets/composables/CurrentRestaurant";

const props = defineProps({
  id: {
    type: String,
  },
});

const route = useRoute();
const router = useRouter();

const { currentRestaurant } = useCurrentRestaurant(route.params.id as string);

provide("restaurantId", route.params.id);

const { data, error, isLoading } = useFetch<Dish>(
  `http://localhost:3000/dishes?restaurant_id=${route.params.id}`
);

const goBack = () => {
  router.go(-1);
};
</script>
<style scoped lang="scss">
.link-wrapper {
  margin-bottom: 15px;
  width: 100%;
  text-align: start;
}
.go-back-link {
  background: transparent;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.5px;
  padding: 8px;
  transition: 0.2s all ease;

  &:hover {
    border-bottom: 1px solid;
    cursor: pointer;
  }
}

.restaurant-name {
  padding-left: 5px;
  text-align: start;
  margin-bottom: 25px;
}
</style>
