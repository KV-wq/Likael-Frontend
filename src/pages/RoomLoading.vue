<script setup>
import Topblock from "../components/TopBlock.vue";
import router from "../router/router";
import { useUserStore } from "../stores/user";
import { useRoomStore } from "../stores/room";
import { onMounted, watch } from "vue";
const userStore = useUserStore();
const roomStore = useRoomStore();

onMounted(async () => {
  await roomStore.startGame();
});

setInterval(() => {
  roomStore.checkRoom();
}, 2000);

watch(
  () => ({
    isGamePlaying: roomStore.isGamePlaying,
    room: roomStore.currentRoom,
  }),
  ({ isGamePlaying, room }) => {
    if (isGamePlaying && room) {
      if (room.player1 === userStore.userData.id) {
        router.push(
          room.side1 === 1 ? "/first-player-room" : "/second-player-room"
        );
      } else {
        router.push(
          room.side1 === 1 ? "/second-player-room" : "/first-player-room"
        );
      }
    }
  },
  { deep: true }
);
</script>

<template>
  <div
    class="vh-100 bg-black d-flex flex-column justify-content-between align-items-center"
  >
    <Topblock :balance="userStore.userData.balance - 10" />
    <img src="../assets/spinner.svg" />
  </div>
</template>

<style scoped>
img {
  animation: spin 4.5s linear infinite;
  opacity: 1;
  width: 120px;
  height: 120px;
  margin-bottom: 70px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
}
</style>
