<template>
  <Suspense>
    <template #fallback>
      <SpinnerLoader />
    </template>

    <RestaurantList />
  </Suspense>
</template>

<script setup lang="ts">
import RestaurantList from "@/components/Restaurant/RestaurantList.vue";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
</script>

<style scoped lang="scss"></style>
