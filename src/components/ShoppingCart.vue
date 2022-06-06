<template>
  <!--  is-empty class -->
  <div class="basket">
    <div class="basket-empty"></div>
    В корзине пока пусто
    <!--    provide inject or pinia -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShoppingCart",
  props: {},
});
</script>

<style scoped lang="scss">
.basket {
  position: fixed;
  width: 344px;
  height: auto;
  right: 0;
  top: 74px;
  bottom: 0;
  left: auto;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  overflow: hidden;
  z-index: 100;
  //box-sizing: border-box;

  &-empty {
    display: block;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    //transform: translate(-50%, -40%);
    padding: 0 60px;
    text-align: center;
  }
}
</style>
