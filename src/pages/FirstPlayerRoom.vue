<script setup>
import HistoryList from "../components/HistoryList.vue";
import ChoiseAnswerScreen from "../components/ChoiseAnswerScreen.vue";
import TotalScreen from "../components/TotalScreen.vue";
import { useRoomStore } from "../stores/room";
import { computed, onMounted, ref } from "vue";
import Timer from "../components/Timer.vue";

const roomStore = useRoomStore();
const currentStage = computed(() => roomStore.currentStage);
const showIntro = ref(true);
const fadeOut = ref(false);

onMounted(() => {
  setTimeout(() => {
    fadeOut.value = true;
    setTimeout(() => {
      showIntro.value = false;
      roomStore.setStage(1);
    }, 1000);
  }, 2000);
});
</script>

<template>
  <div class="vh-100 mx-3 overflow-hidden">
    <div
      v-if="showIntro"
      class="intro-text wizland"
      :class="{ 'fade-out': fadeOut }"
    >
      ЗАГАДЫВАЙ
    </div>

    <template v-else>
      <HistoryList v-if="currentStage === 1" class="fade-in" />
      <ChoiseAnswerScreen v-if="currentStage === 2" class="fade-in" />
      <div v-if="currentStage === 3" class="fade-in">
        <p class="text-center text-white mt-5 fs-2 w-100 mb-4">Ждем игрока 2</p>
        <Timer />
      </div>
      <TotalScreen v-if="currentStage === 4" class="fade-in" />
    </template>
  </div>
</template>

<style scoped>
.intro-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2.5rem;
  opacity: 1;
  transition: opacity 1s ease;
}

.fade-out {
  opacity: 0;
}

.fade-in {
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
