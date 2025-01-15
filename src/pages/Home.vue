<script setup>
import TopBlock from "../components/TopBlock.vue";
import router from "../router/router";

import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>

<template>
  <div class="vh-100 vw-100">
    <div @click="() => router.push('/room-loading')">
      <img
        src="../assets/demon.svg"
        class="w-100 position-absolute bottom-0 demon"
      />
      <img
        src="../assets/flame.gif"
        class="w-100 position-absolute bottom-0 gif"
      />
    </div>

    <TopBlock :balance="userStore.userData.balance" />
  </div>
</template>

<style scoped>
.vh-100 {
  background-color: #090909;
}
.gif {
  mix-blend-mode: color-dodge;
}

.demon {
  animation: init 1s cubic-bezier(0.695, 0.03, 0.685, 0.52);
}

@keyframes init {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
