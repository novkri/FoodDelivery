<template>
  <div class="home">
    <div>id: {{ $route.params.id }}</div>
    <DishList />
  </div>

  <ShoppingCart />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import ShoppingCart from "@/components/ShoppingCart.vue";
import DishList from "@/components/Dish/DishList.vue";

export default defineComponent({
  name: "HomeView",
  components: { DishList, ShoppingCart },
  props: ["id"],
  setup() {
    const route = useRoute();

    onMounted(() => {
      console.log(
        "on mounted get Restaurant Menu which id = ",
        route.params.id
      );
    });

    return {};
  },
});
</script>
<style scoped lang="scss">
.home {
  //   todo вынести в layout
  min-height: calc(100vh - 74px);
}
</style>
