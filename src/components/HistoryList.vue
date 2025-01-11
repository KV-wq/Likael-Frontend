<script setup>
import { useRoomStore } from "../stores/room";
import HistoryItem from "./HistoryItem.vue";

function chooseHistory() {
  useRoomStore().setStage(2);
}
</script>

<template>
  <div class="plug">
    <p class="text-white mt-5 fs-2 text-center w-100">Выберите историю</p>
  </div>
  <div class="gap-3 d-flex flex-column pb-3 overflow-auto history-list">
    <HistoryItem v-for="index in 20" :key="index" @click="chooseHistory" />
  </div>
</template>

<style scoped>
.history-list {
  max-height: calc(100vh - 100px);
}
</style>
