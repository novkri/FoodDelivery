<template>
  <div class="restaurants-list">
    <transition-group name="list-transition">
      <DishCard
        v-for="item in dishes"
        :key="item.id"
        :item="item"
        class="list-item"
        @click="chooseDish(item)"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DishCard from "@/components/Dish/DishCard.vue";
import Dish from "@/types/Dish";

export default defineComponent({
  name: "DishList",
  components: { DishCard },
  props: {},
  setup() {
    const dishes = ref<Dish[]>([
      {
        id: 1,
        title: "Баскет L 26 крыльев",
        weight: 700,
        calories: 304,
        description: "26 куриных крылышек в острой панировке",
        price: 779,
        section: "Баскеты",
        restaurant_id: 1,
      },
      {
        id: 2,
        title: "Твистер острый",
        weight: 178,
        calories: 250,
        description:
          "Закручен со вкусом! Кусочки нежнейшего куриного филе в хрустящей острой пан с сочными листьями салата, кусочками помидора и нежным соусом мы завернули в пшеничную лепешку и поджарили в тостере. Тут все и закрутилось!",
        price: 189,
        section: "Твистеры",
        restaurant_id: 1,
      },
    ]);

    const chooseDish = (item: Dish) => {
      console.log("chosen dish: ", item);
      // add to cart
    };

    return {
      dishes,
      chooseDish,
    };
  },
});
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
