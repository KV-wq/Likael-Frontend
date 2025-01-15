<script setup>
import { onMounted, ref } from "vue";
import HistoryItem from "../components/HistoryItem.vue";
import { useUserStore } from "../stores/user";

const history = ref();

function splitText(text) {
  const parts = text.split(/^(lose|win)\s+/i);

  return {
    result: parts[1],
    text: parts[2].trim(),
  };
}

onMounted(async () => {
  const resp = await useUserStore().getUserHistory();
  history.value = resp.map((item) => splitText(item));
  console.log(history.value);
});
</script>

<template>
  <div class="vh-100 mx-3">
    <p class="text-center text-white pt-5 fs-2 mb-3">История</p>
    <div class="d-flex flex-column gap-2 list">
      <HistoryItem
        :result="item.result"
        :text="item.text"
        v-for="(item, index) in history"
        :key="index"
      />
    </div>
  </div>
</template>

<style scoped>
.list {
  overflow: auto;
  max-height: 78vh;
}
</style>
