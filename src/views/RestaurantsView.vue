<template>
  <div class="home">
    <RestaurantList />
  </div>
</template>

<script setup lang="ts">
import RestaurantList from "@/components/Restaurant/RestaurantList.vue";
</script>
<style scoped lang="scss">
.home {
  //   todo ?!
  min-height: calc(100vh - 74px);
}
</style>
