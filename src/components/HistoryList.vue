<script setup>
import { onMounted, ref } from "vue";
import { useRoomStore } from "../stores/room";
import HistoryItem from "./HistoryItem.vue";

const roomStore = useRoomStore();
const stories = ref();

async function chooseHistory(storyId) {
  try {
    await roomStore.setStory(storyId);
  } catch (error) {
    console.error("Error choosing story:", error);
  } finally {
    useRoomStore().setStage(2);
  }
}

onMounted(async () => {
  stories.value = await roomStore.getStories();
});
</script>

<template>
  <div class="plug">
    <p class="text-white mt-5 fs-2 text-center w-100">Выберите историю</p>
  </div>
  <div class="gap-3 d-flex flex-column pb-3 overflow-auto history-list">
    <HistoryItem
      v-for="story in stories"
      :text="story.description"
      :key="story.story_id"
      @click="chooseHistory(story.story_id)"
    />
  </div>
</template>

<style scoped>
.history-list {
  max-height: calc(100vh - 100px);
}
</style>
