<script setup>
import HistoryItem from "../components/HistoryItem.vue";
import ChoiseAnswer from "../components/ChoiseAnswer.vue";
import Button from "../components/Button.vue";
import { ref } from "vue";
import { useRoomStore } from "../stores/room";

const activeAnswer = ref(null);

function setAnswer() {
  useRoomStore().setStage(3);
}
</script>

<template>
  <div class="h-100 d-flex flex-column justify-content-between">
    <div>
      <p class="text-center text-white mt-5 fs-2">Обман</p>

      <HistoryItem />

      <p class="text-center text-white mt-5 fs-2">Как он поступит?</p>

      <ChoiseAnswer
        text="Сообщит правду"
        :type="activeAnswer == 1 ? 'active' : ''"
        @click="activeAnswer = 1"
      />
      <ChoiseAnswer
        text="Примет чужие заслуги"
        :type="activeAnswer == 2 ? 'active' : ''"
        @click="activeAnswer = 2"
      />
    </div>

    <Button
      text="Загадать"
      :type="activeAnswer ? 'default' : 'disabled'"
      class="mb-5"
      @click="setAnswer"
    />
  </div>
</template>

<style scoped></style>
