<template>
  <div class="wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
});
</script>

<style scoped lang="scss">
.wrapper {
  padding-left: 100px;
  padding-right: 100px;
  max-width: 1500px;
  margin: 30px auto 0 auto;
}

.content {
  min-height: calc(100vh - 74px);
}
</style>
