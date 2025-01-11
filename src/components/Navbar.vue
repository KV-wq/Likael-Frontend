<script setup>
import { computed } from "vue";
import router from "../router/router";

const isHome = computed(() => router.currentRoute.value.fullPath === "/home");

function goHome() {
  router.push("/home");
}

function goProfile() {
  router.push("/profile");
}
</script>

<template>
  <div class="position-absolute bottom-0 mb-4 px-2 w-100">
    <!-- <div class="d-flex flex-column gap-1"></div> -->
    <div class="d-flex justify-content-between" v-show="isHome">
      <img
        src="../assets/nav-icons/home-active.svg"
        @click="goHome"
        v-show="isHome"
      />
      <img
        src="../assets/nav-icons/profile-disabled.svg"
        @click="goProfile"
        v-show="isHome"
      />
      <img
        src="../assets/nav-icons/home-disabled.svg"
        @click="goHome"
        v-show="!isHome"
      />
      <img
        src="../assets/nav-icons/profile-active.svg"
        @click="goProfile"
        v-show="!isHome"
      />
    </div>
  </div>
</template>

<style scoped></style>
