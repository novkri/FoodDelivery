interface Dish {
  id: number;
  title: string;
  weight?: number;
  calories?: number;
  description: string;
  price: number;
  section: string;
  restaurant_id: number;
  image?: string;
}

export default Dish;
