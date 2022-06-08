import { ref } from "vue";

export function useModal() {
  const isModalOpen = ref(false);

  const closeModal = () => {
    isModalOpen.value = false;
  };

  const openModal = () => {
    isModalOpen.value = true;
  };

  return { isModalOpen, closeModal, openModal };
}
