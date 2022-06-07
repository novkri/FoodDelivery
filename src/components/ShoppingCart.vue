<template>
  <div class="basket">
    <div class="basket-empty" v-if="getOrder.length === 0">
      В корзине пока пусто
    </div>

    <div class="list" v-else>
      <p class="restaurant" v-if="currentRestaurant">
        Order from {{ currentRestaurant.title }} restaurant
      </p>
      <div class="list-item" v-for="item in getOrder" :key="item.dish.id">
        <div class="header">
          <p class="title">{{ item.dish.title }}</p>
          <p class="price">{{ item.dish.price * item.amount }} Р</p>
        </div>

        <div class="actions">
          <CounterButton
            :counter="item.amount"
            @increment="incrementAmount(item.dish.id)"
            @decrement="decrementAmount(item.dish.id)"
          />

          <button class="delete-btn action-btn" @click="removeFromCart(item)">
            Delete
          </button>
        </div>
      </div>
    </div>
    <p v-if="getTotalPrice" class="total">Total: {{ getTotalPrice }} Р</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, ref, watch } from "vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import { DishOrder } from "@/types/Cart";
import CounterButton from "@/components/CounterButton.vue";
import Restaurant from "@/types/Restaurant";

// mixin example
// import useCounter from "@/assets/composables/MixinExample.vue";
// const counter1 = useCounter(2)
// counter1.incrementCounter()
// const counter2 = useCounter(5)
// counter2.decrementCounter()
// console.log(counter1.getCounter(), counter2.getCounter())

const props = defineProps({});
const store = useMainStore();

//todo типизация !
const { getOrder, getTotalPrice, getRestaurantId } = storeToRefs(store);

const removeFromCart = (item: DishOrder) => {
  store.deleteDish(item.dish.id);
};

const incrementAmount = (id: number) => {
  store.incrementDishAmount(id);
};

const decrementAmount = (id: number) => {
  store.decrementDishAmount(id);
};

const currentRestaurant = ref<Restaurant | null>(null);

const getRestaurantInfo = (id: string | number) => {
  if (id) {
    store
      .getRestaurantInfo(id)
      .then((value) => {
        currentRestaurant.value = value as Restaurant;
      })
      .catch((err) => {
        currentRestaurant.value = null;
        throw new Error(err);
      });
  }
};
onMounted(() => {
  getRestaurantInfo(getRestaurantId.value as number);
});

watch(getRestaurantId, (newId) => {
  getRestaurantInfo(newId as number);
});
</script>

<style scoped lang="scss">
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
        background-color: #c4c5c4;
        padding: 10px 15px;

        &:hover {
          background-color: rgb(158, 159, 159);
        }
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
