import { onMounted, ref } from "vue";
import Restaurant from "@/types/Restaurant";
import { useCartStore } from "@/store";

export function useCurrentRestaurant(id: string | number) {
  const store = useCartStore();
  const currentRestaurant = ref<Restaurant>();

  const getRestaurantInfo = (id: string | number) => {
    if (id) {
      store
        .getRestaurantInfo(id)
        .then((value) => {
          currentRestaurant.value = value as Restaurant;
        })
        .catch((err) => {
          currentRestaurant.value = undefined;
          throw new Error(err);
        });
    }
  };

  onMounted(() => {
    getRestaurantInfo(id);
  });

  return {
    currentRestaurant,
    getRestaurantInfo,
  };
}
