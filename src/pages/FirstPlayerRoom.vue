<script setup>
import HistoryList from "../components/HistoryList.vue";
import ChoiseAnswerScreen from "../components/ChoiseAnswerScreen.vue";
import TotalScreen from "../components/TotalScreen.vue";
import { useRoomStore } from "../stores/room";
import { computed, onMounted } from "vue";

const roomStore = useRoomStore();

const currentStage = computed(() => roomStore.currentStage);

onMounted(() => {
  roomStore.setStage(1);
});
</script>

<template>
  <div class="vh-100 mx-3 overflow-hidden">
    <HistoryList v-if="currentStage === 1" />

    <ChoiseAnswerScreen v-if="currentStage === 2" />

    <TotalScreen v-if="currentStage === 3" />
  </div>
</template>

<style scoped></style>
