<script setup>
import { computed, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import { useNavbarStore } from "./stores/navbar";
import { useTelegram } from "./services/telegram";

const navbarStore = useNavbarStore();

const { tg } = useTelegram();

const isNavbarVisible = computed(() => {
  return navbarStore.isVisible;
});

onMounted(() => {
  tg.ready();
  tg.expand();
});
</script>

<template>
  <router-view />
  <Navbar v-if="isNavbarVisible" />
</template>

<style scoped></style>
