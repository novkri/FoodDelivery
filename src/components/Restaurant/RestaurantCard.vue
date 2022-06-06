<template>
  <div class="card">
    <div class="image"></div>
    <div class="header">
      <p class="title">{{ item.title }}</p>
      <!--      todo star icon -->
      <sub class="rating">{{ item.rating }}</sub>

      <!--       todo ? -->
      <!--      todo max height + overflow: hidden if Description -->
      <p class="description">{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Restaurant from "@/types/Restaurant";

export default defineComponent({
  name: "RestaurantCard",
  props: {
    item: {
      required: true,
      type: Object as PropType<Restaurant>,
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  //border: 1px solid;
  border-radius: 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 3px 4px 16px 0px rgb(217 217 217 / 72%);

  &:hover {
    cursor: pointer;
    margin-top: -4px;
    margin-bottom: 24px;
    //todo shadow
    box-shadow: 5px 6px 15px 0px rgb(217 217 217);
  }

  .image {
    background-color: #76acfb;
    height: 164px;
    border-radius: 16px 16px 0 0;
  }

  .header {
    padding: 16px;

    .title {
      width: 100%;
      overflow: hidden;
      padding-right: 4px;
    }

    .rating {
      position: absolute;
      top: 2%;
      right: 2%;
      border-radius: 30%;
      padding: 10px;
      background-color: #fffaf5;
      min-width: 20px;
      //margin-top: 10px;
    }
  }

  .description {
    margin-top: 15px;
    text-align: left;
  }
}
</style>
