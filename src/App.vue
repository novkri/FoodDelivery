<template>
  <div class="wrapper">
    <!--     todo add layouts like .home-->
    <nav>
      <!--      <router-link to="/">Home</router-link> |-->
      <!--      <router-link to="/about">Menu</router-link>-->
    </nav>

    <component :is="layout">
      <router-view />
    </component>
  </div>
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
<style lang="scss">
#app {
  background-image: linear-gradient(
    -180deg,
    white 60%,
    #fbfbfb 65%,
    #f6f6f6 100%
  );
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
}

nav {
  padding: 30px;
  height: 74px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.wrapper {
  padding-left: 100px;
  padding-right: 100px;
  max-width: 1500px;
  margin: 0 auto;
}
</style>
