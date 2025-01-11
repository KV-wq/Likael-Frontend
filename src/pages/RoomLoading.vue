<script setup>
import Topblock from "../components/TopBlock.vue";
import router from "../router/router";

setTimeout(() => {
  router.push("/first-player-room");
  // router.push("/second-player-room");
}, 3000);
</script>

<template>
  <div
    class="vh-100 bg-black d-flex flex-column justify-content-between align-items-center"
  >
    <Topblock />
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
