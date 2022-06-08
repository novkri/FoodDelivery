<template>
  <div class="counter">
    <button class="counter__button" @click="decrement">
      <img src="@/assets/img/minus.svg" alt="-" />
    </button>

    <span class="counter__number">{{ count }}</span>
    <button class="counter__button" @click="increment">
      <img src="@/assets/img/plus.svg" alt="+" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  count: {
    required: true,
    type: Number,
  },
});

const emit = defineEmits<{
  (e: "increment"): void;
  (e: "decrement"): void;
  // example :
  (
    e: "change",
    test: {
      id: number;
    }
  ): void;
}>();

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
    padding: 8px 10px;
    border-radius: 4px;
    margin: 0 5px;
    background-color: #f7f7f7;

    &:hover {
      cursor: pointer;
      background-color: #eee;
    }

    img {
      width: 10px;
      height: 10px;
    }
  }

  &__number {
    font-weight: 500;
    margin: 0 8px;
  }
}
</style>
