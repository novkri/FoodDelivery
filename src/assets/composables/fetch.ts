import { reactive, ref, toRef, toRefs, unref } from "vue";

export function useFetch<T>(url: string) {
  const data = ref<T[]>();
  const error = ref<ErrorEvent>();
  const isLoading = ref(true);

  // isLoading = RefImpl{...}
  // unref(isLoading) = true
  // console.log(isLoading, unref(isLoading));

  // const state = reactive({
  //   foo: 1,
  //   bar: 2,
  // });
  //
  // // { foo: ObjectRefImpl, bar: ObjectRefImpl }
  // console.log(toRefs(state));

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
