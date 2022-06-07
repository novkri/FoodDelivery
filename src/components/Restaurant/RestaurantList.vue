<template>
  <div class="restaurants-list">
    <transition-group name="list-transition">
      <RestaurantCard
        v-for="item in restItems"
        :key="item.id"
        :item="item"
        class="list-item"
        @click="chooseRestaurant(item)"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, ref } from "vue";
import RestaurantCard from "@/components/Restaurant/RestaurantCard.vue";
import Restaurant from "@/types/Restaurant";
import { useRouter } from "vue-router";

const props = defineProps({});

const router = useRouter();

const restItems = ref<Restaurant[]>([
  {
    id: 1,
    title: "111",
    rating: 4.5,
    address: "gdfgdf",
    description: "dfgdfg",
  },
  {
    id: 2,
    title: "222",
    rating: 4.8,
    address: "dsf dfgdf ",
  },
  {
    id: 3,
    title: "333",
    rating: 4.4,
    address: "5ygf gdfg ",
    description: "dffghgfh dfs sdddddddddddddd sfl gdfg",
  },
  {
    id: 4,
    title: "444",
    rating: 4.0,
    address: "5ygf gdfgfgdfg ",
  },
  {
    id: 5,
    title: "555",
    rating: 3.4,
    address: "5ygfsgdfg gdfg ",
    description: "afgdffghgfh dfs sdddddddddddddd sfl gdfg",
  },
  {
    id: 34,
    title: "444",
    rating: 4.0,
    address: "5ygf gdfgfgdfg ",
  },
  // {
  //   id: 53,
  //   title: "555",
  //   rating: 3.4,
  //   address: "5ygfsgdfg gdfg ",
  //   description: "afgdffghgfh dfs sdddddddddddddd sfl gdfg",
  // },
  // {
  //   id: 544,
  //   title: "444",
  //   rating: 4.0,
  //   address: "5ygf gdfgfgdfg ",
  // },
  // {
  //   id: 54,
  //   title: "555",
  //   rating: 3.4,
  //   address: "5ygfsgdfg gdfg ",
  //   description: "afgdffghgfh dfs sdddddddddddddd sfl gdfg",
  // },
  // {
  //   id: 48,
  //   title: "444",
  //   rating: 4.0,
  //   address: "5ygf gdfgfgdfg ",
  // },
  // {
  //   id: 56,
  //   title: "555",
  //   rating: 3.4,
  //   address: "5ygfsgdfg gdfg ",
  //   description: "afgdffghgfh dfs sdddddddddddddd sfl gdfg",
  // },
  // {
  //   id: 40,
  //   title: "444",
  //   rating: 4.0,
  //   address: "5ygf gdfgfgdfg ",
  // },
  // {
  //   id: 53,
  //   title: "555",
  //   rating: 3.4,
  //   address: "5ygfsgdfg gdfg ",
  //   description: "afgdffghgfh dfs sdddddddddddddd sfl gdfg",
  // },
]);

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
