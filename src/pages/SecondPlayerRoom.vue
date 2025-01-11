<script setup>
import ChoiseAnswerScreen from "../components/ChoiseAnswerScreen.vue";
import TotalScreen from "../components/TotalScreen.vue";
import Timer from "../components/Timer.vue";
import { useRoomStore } from "../stores/room";
import { computed, onMounted } from "vue";

const roomStore = useRoomStore();

const currentStage = computed(() => roomStore.currentStage);

onMounted(() => {
  roomStore.setStage(1);
});
</script>

<template>
  <div class="vh-100 mx-3 position-relative overflow-hidden">
    <div v-if="currentStage === 1">
      <p class="text-center text-white mt-5 fs-2 w-100 mb-4">Ждем игрока 1</p>

      <Timer />
    </div>

    <ChoiseAnswerScreen v-if="currentStage === 2" />

    <TotalScreen v-if="currentStage === 3" />
  </div>
</template>

<style scoped></style>
