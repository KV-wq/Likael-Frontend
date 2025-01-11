<script setup>
import Winning from "../components/Winning.vue";
import router from "../router/router";
import { useRoomStore } from "../stores/room";
import Button from "./Button.vue";

function goHome() {
  useRoomStore().setStage(null);
  router.push("/home");
}
</script>

<template>
  <div class="h-100 d-flex flex-column justify-content-between">
    <div>
      <p class="text-center text-white mt-5 fs-2">Победа</p>
      <Winning :count="540" />
    </div>

    <Button
      text="Забрать награду"
      type="outline"
      class="mb-5"
      @click="goHome"
    />
  </div>
</template>

<style scoped></style>
