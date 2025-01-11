import { defineStore } from "pinia";
import { ref } from "vue";

export const useRoomStore = defineStore("room", () => {
  const currentStage = ref(null);

  const setStage = (newStage) => {
    currentStage.value = newStage;
  };

  return {
    currentStage,
    setStage,
  };
});
