import { useCartStore } from "@/store";

export function useCounter() {
  const store = useCartStore();
  const incrementAmount = (id: number) => {
    store.incrementDishAmount(id);
  };

  const decrementAmount = (id: number) => {
    store.decrementDishAmount(id);
  };

  return { incrementAmount, decrementAmount };
}
