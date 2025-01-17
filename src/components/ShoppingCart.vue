<template>
  <div class="basket">
    <div class="basket-empty" v-if="getOrder.length === 0">
      В корзине пока пусто
    </div>

    <!--    class :list -> to CartList.vue component -->
    <div class="list" v-else>
      <!--    class :restaurant -> to CartHeader.vue component -->
      <p class="restaurant" v-if="currentRestaurant">
        Order from {{ currentRestaurant.title }} restaurant
      </p>

      <!--    class :list-item -> to CartItem.vue component -->
      <div class="list-item" v-for="item in getOrder" :key="item.dish.id">
        <div class="header">
          <p class="title">{{ item.dish.title }}</p>
          <p class="price">{{ item.dish.price * item.amount }} Р</p>
        </div>

        <div class="actions">
          <CounterButton
            :count="item.amount"
            @increment="incrementAmount(item.dish.id)"
            @decrement="decrementAmount(item.dish.id)"
          />

          <button class="delete-btn" @click="removeFromCart(item.dish.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
    <p v-if="getTotalPrice" class="total">Total: {{ getTotalPrice }} Р</p>
  </div>
</template>

<script setup lang="ts">
import { unref, watch } from "vue";
import { useCartStore } from "@/store";
import { storeToRefs } from "pinia";
import CounterButton from "@/components/CounterButton.vue";
import { useCurrentRestaurant } from "@/assets/composables/CurrentRestaurant";
import { useCounter } from "@/assets/composables/Counter";
import { useCart } from "@/assets/composables/Cart";

const store = useCartStore();

const { getOrder, getTotalPrice, getRestaurantId } = storeToRefs(store);

// компонент можно упростить, разбив template на 3 отдельных компонента
const { removeFromCart } = useCart();
const { incrementAmount, decrementAmount } = useCounter();
const { currentRestaurant, getRestaurantInfo } = useCurrentRestaurant(
  unref(getRestaurantId) as number
);

watch(getRestaurantId, (newId) => {
  getRestaurantInfo(newId as number);
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";

.basket {
  position: fixed;
  width: 344px;
  height: auto;
  right: 0;
  top: 0;
  bottom: 0;
  left: auto;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  overflow: hidden;
  z-index: 100;

  &-empty {
    display: block;
    position: absolute;
    top: 40%;
    left: 30%;
  }

  .restaurant {
    padding: 15px;
  }

  .list {
    height: 100%;
    overflow-y: scroll;

    .list-item {
      display: flex;
      flex-direction: column;
      border-top: 1px solid #eee;
      padding: 15px;

      .header {
        display: flex;
        justify-content: space-between;
      }

      .price {
        font-weight: bold;
      }

      .actions {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .delete-btn {
        @include button($background: #c4c5c4);
        background-color: #c4c5c4;
        padding: 10px 15px;
      }
    }
  }

  .total {
    position: fixed;
    bottom: 0;
    padding: 2em;
    width: calc(344px - 15px - 15px);
    border-top: 1px solid #eee;
    font-weight: bold;
    background: white;
  }
}
</style>
