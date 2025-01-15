<script setup>
import { onMounted, ref } from "vue";
import Winning from "../components/Winning.vue";
import router from "../router/router";
import { useRoomStore } from "../stores/room";
import { useUserStore } from "../stores/user";
import Button from "./Button.vue";

const roomStore = useRoomStore();
const count = ref(0);
const text = ref("Поражение");
const buttonText = ref("На главный");

onMounted(async () => {
  await roomStore.checkRoom();
  if (roomStore.currentRoom.winnerId == useUserStore().userData.id) {
    count.value = 20;
    text.value = "Победа";
    buttonText.value = "Забрать награду";
  }
});

function goHome() {
  roomStore.setStage(null);
  roomStore.deleteRoom();
  useUserStore().userData.balance += count.value - 10;
  router.push("/home");
}
</script>

<template>
  <div class="h-100 d-flex flex-column justify-content-between">
    <div>
      <p class="text-center text-white mt-5 fs-2">{{ text }}</p>
      <Winning :count="count" />
    </div>

    <Button :text="buttonText" type="outline" class="mb-5" @click="goHome" />
  </div>
</template>

<style scoped></style>
