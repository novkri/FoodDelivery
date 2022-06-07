import { defineStore } from "pinia";
import { Cart, DishOrder } from "@/types/Cart";
import Dish from "@/types/Dish";

export type RootState = {
  cart: Cart;
};

export const useMainStore = defineStore({
  id: "cartStore",
  state: () =>
    ({
      cart: {
        restaurant_id: undefined,
        order: [],
      },
    } as RootState),
  getters: {
    getOrder: (state) => state.cart.order,
    getOrderLength: (state) => state.cart.order.length,
    getRestaurantId: (state) => state.cart.restaurant_id,
    getTotalPrice: (state) =>
      state.cart.order.reduce((acc, item) => {
        const totalItemPrice = item.dish.price * item.amount;
        acc += totalItemPrice;
        return acc;
      }, 0),
    // getClass: (state) => state.character.class,
  },

  actions: {
    clear() {
      this.cart.order = [];
    },

    setRestaurant(id: number) {
      this.cart.restaurant_id = id;
    },

    addDish(item: Dish) {
      const isExist = this.cart.order.findIndex((el) => el.dish.id === item.id);
      if (isExist === -1) {
        this.cart.order.push({ dish: item, amount: 1 });
      } else {
        this.incrementDishAmount(item.id);
      }
    },

    incrementDishAmount(id: number) {
      this.cart.order = this.cart.order.map((el) => {
        if (el.dish.id === id) {
          el.amount += 1;
        }

        return el;
      });
      // this.cart.order.find(el => el.dish.id === id).amount += 1
    },

    decrementDishAmount(id: number) {
      this.cart.order = this.cart.order.map((el) => {
        if (el.dish.id === id) {
          //todo check if 0
          if (el.amount === 1) {
            this.deleteDish(id);
          } else {
            el.amount -= 1;
          }
        }

        return el;
      });
      // this.cart.order.find(el => el.dish.id === id).amount += 1
    },

    deleteDish(id: number) {
      this.cart.order = this.cart.order.filter((el) => el.dish.id !== id);
    },
  },
});
