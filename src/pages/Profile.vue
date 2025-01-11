<script setup>
import UserInfo from "../components/UserInfo.vue";
import UserMenuItem from "../components/UserMenuItem.vue";
import router from "../router/router";
</script>

<template>
  <div class="vh-100 pt-4">
    <UserInfo />
    <div class="d-flex flex-column gap-2 mx-3 mt-3">
      <UserMenuItem
        text="Сменить сторону"
        @click="() => router.push('/choise-side')"
      />
      <UserMenuItem
        text="Истории"
        @click="() => router.push('/history-games')"
      />
      <UserMenuItem text="FAQ" />
    </div>
  </div>
</template>

<style scoped></style>
