<template>
  <div class="home">
    <RestaurantList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RestaurantList from "@/components/Restaurant/RestaurantList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    RestaurantList,
  },
});
</script>
<style scoped lang="scss">
.home {
  //   todo ?!
  min-height: calc(100vh - 74px);
}
</style>
