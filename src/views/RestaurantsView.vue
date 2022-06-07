<template>
  <div>
    <div v-if="data.length === 0">No data</div>
    <RestaurantList v-else :items="data" />
  </div>
</template>

<script setup lang="ts">
import RestaurantList from "@/components/Restaurant/RestaurantList.vue";
import { computed, onMounted, Ref, ref } from "vue";
import { useFetch } from "@/assets/composables/fetch";
import Restaurant from "@/types/Restaurant";

const { data, error } = useFetch<Restaurant>(
  "http://localhost:3000/restaurants"
);
</script>
<style scoped lang="scss"></style>
