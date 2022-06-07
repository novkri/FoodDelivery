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
import { defineComponent, defineProps, onMounted, PropType, ref } from "vue";
import RestaurantCard from "@/components/Restaurant/RestaurantCard.vue";
import Restaurant from "@/types/Restaurant";
import { useRouter } from "vue-router";
import { useFetch } from "@/assets/composables/fetch";

const props = defineProps({
  // items: {
  //   required: true,
  //   type: Array as PropType<Restaurant[]>,
  // },
});

const router = useRouter();

const chooseRestaurant = (item: Restaurant) => {
  router.push({
    name: "menu",
    params: {
      id: item.id,
    },
  });
};

const { data, error, isLoading } = useFetch<Restaurant>(
  "http://localhost:3000/restaurants"
);

//  todo Q async component (+)
// const data = await fetch("http://localhost:3000/restaurants").then((res) =>
//   res.json()
// );

// const data = ref<Restaurant[]>();
// const error = ref<ErrorEvent>();
// const isLoading = ref(true);
//
// todo Q async component
// const fetchDataAsync = async () => {
//   await fetch("http://localhost:3000/restaurants")
//     .then((res) => res.json())
//     .then((json) => {
//       data.value = json;
//     })
//     .catch((err) => {
//       error.value = err;
//     })
//     .finally(() => {
//       isLoading.value = false;
//     });
//   // }, 10000);
// };
//
// onMounted(() => {
//   setTimeout(() => {
//     fetchDataAsync();
//   }, 5000);
// });
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
