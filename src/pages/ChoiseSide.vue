<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import ChoiseSideCard from "../components/ChoiseSideCard.vue";
import router from "../router/router";
import { useUserStore } from "../stores/user";

const activeSide = ref(true);
const userStore = useUserStore();

function handleClickFirst() {
  activeSide.value = true;
}

function handleClickSecond() {
  activeSide.value = false;
}

async function choise() {
  await userStore.choiseSide(activeSide.value ? 1 : 2);
  router.push("/home");
}
</script>

<template>
  <div class="vh-100 mx-3 position-relative">
    <p class="text-center text-white wizland py-5">
      выбери одну <br />
      из двух сторон
    </p>
    <div class="gap-2 d-flex">
      <ChoiseSideCard
        :active="activeSide"
        @click="handleClickFirst"
        text="Загадывай"
      />
      <ChoiseSideCard
        :active="!activeSide"
        @click="handleClickSecond"
        text="Угадывай"
      />
    </div>
    <Button
      text="Выбрать"
      type="default"
      class="position-absolute bottom-0 mb-5"
      @click="choise"
    />
  </div>
</template>

<style scoped>
p {
  font-size: 32px;
}
</style>
