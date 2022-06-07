<template>
  <div class="content">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
});
</script>

<style scoped lang="scss">
.content {
  min-height: calc(100vh - 74px);
}
</style>
