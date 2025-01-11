<script setup>
import { onMounted, ref } from "vue";
import router from "../router/router";

const time = ref(150);
const formattedTime = ref("2:30");
let interval = null;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(1, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};

onMounted(() => {
  formattedTime.value = formatTime(time.value);
  interval = setInterval(() => {
    if (time.value > 0) {
      time.value--;
      formattedTime.value = formatTime(time.value);
    } else {
      clearInterval(interval);
      formattedTime.value = "0:00";
      router.push("/home");
    }
  }, 1000);
});
</script>

<template>
  <div class="rounded-4">
    <div class="d-flex gap-2">
      <p class="text-white text-center mb-0">{{ formattedTime }}</p>
    </div>
  </div>
</template>

<style scoped>
.rounded-4 {
  background: rgba(255, 255, 255, 0.052);
  font-size: 40px;
  font-weight: 400;
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
