import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";

export const useRoomStore = defineStore("room", () => {
  const currentStage = ref(null);
  const room = ref(null);
  const isPlaying = ref(false);
  const user = useUserStore().userData;

  const startGame = async () => {
    try {
      const response = await axios.post("/game/rooms", {
        userId: user.id,
        side: user.current_side,
      });

      const roomId = response.data.roomId;

      const currentRoom = await axios.get("/room", {
        roomId: roomId,
      });

      room.value = currentRoom.data;

      if (room.value.status === "playing") isPlaying.value = true;

      console.log(room.value);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async () => {
    try {
      await axios.delete("/rooms", { id: room.id });
      room.value = null;
      isPlaying.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const getStories = async () => {
    try {
      const response = await axios.get("/stories");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const setStage = (newStage) => {
    currentStage.value = newStage;
  };

  const currentRoom = computed(() => room.value);
  const isGamePlaying = computed(() => isPlaying.value);

  return {
    currentStage,
    setStage,
    startGame,
    getStories,
    deleteRoom,
    currentRoom,
    isGamePlaying,
  };
});
