<script setup>
import HistoryItem from "../components/HistoryItem.vue";
</script>

<template>
  <div class="vh-100 mx-3">
    <p class="text-center text-white mt-5 fs-2 mb-3">История</p>
    <div class="d-flex flex-column gap-2">
      <HistoryItem result="win" />
      <HistoryItem result="lose" />
    </div>
  </div>
</template>

<style scoped></style>
