import { ref } from "vue";

export function useFetch<T>(url: string) {
  //todo типизация refs
  const data = ref<T[]>([]);
  const error = ref(null);
  // let data: T[] = [];
  // let error = null;

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      data.value = json;
      // data = json;
    })
    .catch((err) => {
      error.value = err;
      // error = err;
    });

  return { data, error };
}
