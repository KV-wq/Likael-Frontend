<script setup>
import { useUserStore } from "../stores/user";

const user = useUserStore().userData;
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <img :src="user.photo_url" class="avatar" />
    <p class="text-white fs-3 mb-0 mt-2">{{ user.fullname }}</p>
    <p class="text-white fs-6 fw-light opacity-50">{{ user.username }}</p>
  </div>
</template>

<style scoped>
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
</style>
