<script setup>
import { onMounted } from "vue";
import router from "../router/router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

onMounted(async () => {
  await userStore.auth(tg.initData);
  if (userStore.userData.current_side) {
    router.push("/home");
  } else {
    router.push("/choise-side");
  }
});
</script>

<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center gap-4 vh-100"
  >
    <img src="../assets/spinner.svg" />
    <p class="text-center text-white">
      Работник получает возможность приписать себе заслуги за проект, который не
      завершил
    </p>
  </div>
</template>

<style scoped>
p {
  width: 318px;
  font-weight: 400;
  font-size: 18px;
}
img {
  animation: spin 4s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
