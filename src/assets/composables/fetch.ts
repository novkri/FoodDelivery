import { ref } from "vue";

export function useFetch<T>(url: string) {
  //todo типизация refs
  const data = ref<T[]>([]);
  const error = ref(null);
  const isLoading = ref(true);

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      data.value = json;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      isLoading.value = false;
    });

  return { data, error, isLoading };
}
