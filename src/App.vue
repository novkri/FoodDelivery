<template>
  <component :is="layout">
    <router-view />
  </component>

  <div id="modal-target"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import defaultLayout from "@/layouts/DefaultLayout.vue";

const route = useRoute();

const layout = computed(() => {
  return route.meta.layout || defaultLayout;
});
</script>

<style lang="scss"></style>
