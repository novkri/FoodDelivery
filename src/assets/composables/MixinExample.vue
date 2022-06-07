<script lang="ts">
import { ref, onMounted } from "vue";

export default function useCounter(counter = 0) {
  const counterRef = ref(counter);

  onMounted(() => (counterRef.value = 1));

  function incrementCounter() {
    counterRef.value++;
  }

  function decrementCounter() {
    counterRef.value--;
  }

  function getCounter() {
    return counterRef.value;
  }

  return {
    incrementCounter,
    decrementCounter,
    getCounter,
  };
}
</script>

<style scoped lang="scss"></style>
