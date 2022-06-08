import { useCartStore } from "@/store";
import Dish from "@/types/Dish";
import { inject } from "vue";
import { useModal } from "@/assets/composables/Modal";
import { DishOrder } from "@/types/Cart";

export function useCart(item: Dish) {
  //todo Q
  const { isModalOpen, closeModal, openModal } = useModal();

  const store = useCartStore();
  const restaurantRouteId = inject<number>("restaurantId");

  const addToCart = () => {
    if (
      store.getOrderLength > 0 &&
      store.getRestaurantId !== restaurantRouteId
    ) {
      openModal();
      return;
    }

    store.setRestaurant(restaurantRouteId as number);
    store.addDish(item);
  };

  const createNewCart = () => {
    store.clear();
    store.setRestaurant(restaurantRouteId as number);
    store.addDish(item);

    closeModal();
  };

  //todo Q
  // const removeFromCart = (item: DishOrder) => {
  //   store.deleteDish(item.dish.id);
  // };

  return {
    addToCart,
    createNewCart,
    // removeFromCart,
    isModalOpen,
    closeModal,
    openModal,
  };
}
