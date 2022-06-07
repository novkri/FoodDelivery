<template>
  <div class="counter">
    <button class="counter__button" @click="decrement">-</button>
    {{ counter }}
    <button class="counter__button" @click="increment">+</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import useCounter from "@/assets/scripts/MixinExample.vue";

const props = defineProps({
  counter: {
    required: true,
    type: Number,
  },
});

const emit = defineEmits(["increment", "decrement"]);
const decrement = () => {
  emit("decrement");
};

const increment = () => {
  emit("increment");
};
</script>

<style scoped lang="scss">
.counter {
  &__button {
    padding: 6px 12px;
    border-radius: 4px;
    margin: 0 5px;
    background-color: #f7f7f7;
    font-size: 1.1em;
    //font-weight: 400;

    &:hover {
      cursor: pointer;
      background-color: #eee;
    }
  }
}
</style>
