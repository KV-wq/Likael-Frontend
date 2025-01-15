<script setup>
import HistoryItem from "../components/HistoryItem.vue";
import ChoiseAnswer from "../components/ChoiseAnswer.vue";
import Button from "../components/Button.vue";
import { onMounted, ref } from "vue";
import { useRoomStore } from "../stores/room";

const roomStore = useRoomStore();

const activeAnswer = ref(null);
const story = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  const resp = await roomStore.getStory(roomStore.currentRoom.story_id);
  story.value = resp;
  isLoading.value = false;
});

async function setAnswer(answerIndex) {
  await roomStore.setAnswer(answerIndex);
  roomStore.setStage(3);
}
</script>

<template>
  <div class="h-100 d-flex flex-column justify-content-between">
    <img src="../assets/spinner.svg" v-if="isLoading" />
    <div v-if="story">
      <p class="text-center text-white mt-5 fs-2">{{ story.sin }}</p>

      <HistoryItem :text="story.description" />

      <p class="text-center text-white mt-5 fs-2">{{ story.question }}</p>

      <ChoiseAnswer
        :text="story.answers[0]"
        :type="activeAnswer == 1 ? 'active' : ''"
        @click="activeAnswer = 1"
      />
      <ChoiseAnswer
        :text="story.answers[1]"
        :type="activeAnswer == 2 ? 'active' : ''"
        @click="activeAnswer = 2"
      />
    </div>

    <Button
      text="Загадать"
      :type="activeAnswer ? 'default' : 'disabled'"
      class="mb-5"
      @click="setAnswer(activeAnswer)"
    />
  </div>
</template>

<style scoped>
img {
  width: 150px;
  height: 150px;
  animation: spin 4s linear infinite;
  margin: auto;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
