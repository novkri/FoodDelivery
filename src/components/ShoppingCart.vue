<template>
  <!--  is-empty class -->
  <div class="basket">
    <div class="basket-empty" v-if="getOrder.length === 0">
      В корзине пока пусто
    </div>

    <div class="list" v-else>
      <div class="list-item" v-for="item in getOrder" :key="item.dish.id">
        <p>{{ item.dish.title }}</p>

        <span>{{ item.amount }}</span>

        <button @click="removeFromCart(item)">Delete</button>
      </div>

      <!--      <span>{{ item.amount }}</span>-->
    </div>
    <!--    provide inject or pinia -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import { DishOrder } from "@/types/Cart";

export default defineComponent({
  name: "ShoppingCart",
  props: {},
  setup() {
    const store = useMainStore();

    //todo типизация !
    const { getOrder } = storeToRefs(store);

    const removeFromCart = (item: DishOrder) => {
      store.deleteDish(item.dish.id);
    };

    return {
      getOrder,
      removeFromCart,
    };
  },
});
</script>

<style scoped lang="scss">
.basket {
  position: fixed;
  width: 344px;
  height: auto;
  right: 0;
  top: 74px;
  bottom: 0;
  left: auto;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  overflow: hidden;
  z-index: 100;
  //box-sizing: border-box;

  &-empty {
    //display: block;
    //position: absolute;
    //top: 40%;
    //left: 50%;
    //margin-right: -50%;
    ////transform: translate(-50%, -40%);
    //padding: 0 60px;
    //text-align: center;
  }
}
</style>
