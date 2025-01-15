<script setup>
import { computed, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import { useNavbarStore } from "./stores/navbar";
import { useTelegram } from "./services/telegram";
import { useUserStore } from "./stores/user";
import axios from "axios";

const navbarStore = useNavbarStore();
const userStore = useUserStore();

const isNavbarVisible = computed(() => {
  return navbarStore.isVisible;
});

const { tg } = useTelegram();

onMounted(async () => {
  tg.ready();
  await userStore.auth(tg.initData);
  console.log(userStore.userData);
});
</script>

<template>
  <router-view />
  <Navbar v-if="isNavbarVisible" />
</template>

<style scoped></style>
