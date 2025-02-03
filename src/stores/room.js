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
        // side: user.current_side,
      });

      const roomId = response.data.roomId;

      const currentRoom = await axios.get("/game/room", {
        params: { roomId: roomId },
      });

      room.value = currentRoom.data;

      if (room.value.status === "playing") isPlaying.value = true;
    } catch (error) {
      console.log(error);
    }
  };

  const checkRoom = async () => {
    try {
      const response = await axios.get("/game/room", {
        params: { roomId: currentRoom.value.id },
      });

      room.value = response.data;

      if (room.value.status === "playing") isPlaying.value = true;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async () => {
    try {
      await axios.delete("/game/rooms", { id: room.id });
      room.value = null;
      isPlaying.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const setStory = async (id) => {
    try {
      const message = await axios.post("/game/rooms/set-story", {
        roomId: currentRoom.value.id,
        storyId: id,
      });

      room.value.story_id = message.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getStories = async () => {
    try {
      const response = await axios.get("/game/stories");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getStory = async (id) => {
    try {
      const response = await axios.get("/game/story", { params: { id: id } });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const setAnswer = async (index) => {
    try {
      const response = await axios.post("/game/rooms/submit", {
        roomId: currentRoom.value.id,
        userId: user.id,
        answerIndex: index,
      });

      console.log(response.data);
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
    getStory,
    deleteRoom,
    checkRoom,
    setStory,
    setAnswer,
    currentRoom,
    isGamePlaying,
  };
});
