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
import { useMainStore } from "@/store";
import Restaurant from "@/types/Restaurant";

const props = defineProps({
  id: {
    type: String,
  },
});

const route = useRoute();
const router = useRouter();
const store = useMainStore();

//todo вынести отсбюда и из ShoppingCart
const currentRestaurant = ref<Restaurant>();

// get current restaurant name
onMounted(() => {
  if (typeof route.params.id === "string") {
    store
      .getRestaurantInfo(route.params.id)
      .then((value) => {
        currentRestaurant.value = value as Restaurant;
      })
      .catch((err) => {
        currentRestaurant.value = undefined;
        throw new Error(err);
      });
  }
});

provide("restaurantId", route.params.id);

const { data, error, isLoading } = useFetch<Dish>(
  `http://localhost:3000/dishes?restaurant_id=${route.params.id}`
);

const goBack = () => {
  router.go(-1);
};
</script>
<style scoped lang="scss">
.home {
  // todo вынести в layout
  //min-height: calc(100vh - 74px);
}

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
