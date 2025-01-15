<script setup>
import { useUserStore } from "../stores/user";

const user = useUserStore().userData;
</script>

<template>
  <div class="d-flex w-100 flex-column align-items-center pt-5 gap-1">
    <div class="d-flex gap-2 align-items-center">
      <div class="coin" />
      <p class="mb-0 text-white">{{ user.balance }}</p>
    </div>
    <p class="text-white opacity-50 fs-6 fw-light">Протяни руку демону...</p>
  </div>
</template>

<style scoped>
.mb-0 {
  font-size: 48px;
}
.coin {
  width: 50px;
  height: 50px;
  background: #ffc72d;
  border-radius: 100%;
  z-index: 1;
}
</style>
