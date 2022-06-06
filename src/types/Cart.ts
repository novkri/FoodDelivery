import Dish from "@/types/Dish";

interface DishOrder {
  dish: Dish;
  amount: number;
}

interface Cart {
  restaurant_id: number | undefined;
  order: DishOrder[];
}

export { Cart, DishOrder };
