<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import defaultLayout from "@/layouts/DefaultLayout.vue";

const route = useRoute();

// const double = computed<number>(() => {
//   // type error if this doesn't return a number
// })

const layout = computed(() => {
  return route.meta.layout || defaultLayout;
});
</script>

<style lang="scss"></style>
