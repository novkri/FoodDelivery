<template>
  <Suspense>
    <template #fallback>
      <SpinnerLoader />
    </template>

    <RestaurantList />
  </Suspense>

  <br />
  <div>
    <button @click="teleportOpen = !teleportOpen">
      Teleport is {{ teleportOpen ? "open" : "closed" }}
    </button>
  </div>
  <!--  The target element cannot be a part of the same component... It needs to be outside of <div id="app">. -->
  <Teleport to="body"><ShoppingCart v-if="teleportOpen" /></Teleport>
</template>

<script setup lang="ts">
import RestaurantList from "@/components/Restaurant/RestaurantList.vue";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import { ref } from "vue";

const teleportOpen = ref(false);
</script>

<style scoped lang="scss"></style>
