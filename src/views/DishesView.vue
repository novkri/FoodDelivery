<template>
  <div class="home">
    <button class="go-back-link" @click="goBack">&lt; Все рестораны</button>
    <div>id: {{ $route.params.id }}</div>

    <div v-if="data.length === 0">No data</div>
    <DishList v-else :items="data" />
  </div>

  <ShoppingCart />
</template>

<script setup lang="ts">
import { defineComponent, defineProps, onMounted, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import ShoppingCart from "@/components/ShoppingCart.vue";
import DishList from "@/components/Dish/DishList.vue";
import { useFetch } from "@/assets/composables/fetch";
import Dish from "@/types/Dish";

const props = defineProps({
  // id: {
  //   type: Number
  // }
});

const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log("on mounted get Restaurant Menu which id = ", route.params.id);
});

provide("restaurantId", route.params.id);

const { data, error } = useFetch<Dish>(
  `http://localhost:3000/dishes?restaurant_id=${route.params.id}`
);

const goBack = () => {
  router.go(-1);
};
</script>
<style scoped lang="scss">
.home {
  // todo вынести в layout
  min-height: calc(100vh - 74px);
}

.go-back-link {
  margin-right: auto;
  background: transparent;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.8px;
  padding: 8px;
  transition: 0.2s all ease;
  margin-bottom: 15px;

  &:hover {
    border-bottom: 1px solid;
    cursor: pointer;
  }
}
</style>
