import { useCartStore } from "@/store";
import Dish from "@/types/Dish";
import { inject } from "vue";

export function useCart() {
  const store = useCartStore();
  const restaurantRouteId = inject<number>("restaurantId");

  const addToCart = (item: Dish) => {
    store.setRestaurant(restaurantRouteId as number);
    store.addDish(item);
  };

  const createNewCart = (item: Dish) => {
    store.clear();
    store.setRestaurant(restaurantRouteId as number);
    store.addDish(item);
  };

  const removeFromCart = (id: number) => {
    store.deleteDish(id);
  };

  return {
    addToCart,
    createNewCart,
    removeFromCart,
  };
}
