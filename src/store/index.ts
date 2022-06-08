import { defineStore } from "pinia";
import { Cart, DishOrder } from "@/types/Cart";
import Dish from "@/types/Dish";
import Restaurant from "@/types/Restaurant";

export type RootState = {
  cart: Cart;
};

export const useCartStore = defineStore({
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
  },

  actions: {
    clear() {
      this.cart.order = [];
    },

    setRestaurant(id: number) {
      this.cart.restaurant_id = id;
    },

    getRestaurantInfo(id: string | number) {
      return new Promise<Restaurant | Error>((resolve, reject) => {
        fetch(`http://localhost:3000/restaurants/${id}`)
          .then((res) => res.json())
          .then((json) => {
            resolve(json as Restaurant);
          })
          .catch((error) => {
            reject(error as Error);
          });
      });
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
    },

    decrementDishAmount(id: number) {
      this.cart.order = this.cart.order.map((el) => {
        if (el.dish.id === id) {
          if (el.amount === 1) {
            this.deleteDish(id);
          } else {
            el.amount -= 1;
          }
        }
        return el;
      });
    },

    deleteDish(id: number) {
      this.cart.order = this.cart.order.filter((el) => el.dish.id !== id);
    },
  },
});
