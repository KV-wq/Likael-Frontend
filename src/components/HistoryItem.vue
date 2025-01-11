<script setup>
const props = defineProps({
  result: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="rounded-4 px-3 py-4">
    <p class="text-white text-center mb-0">
      Работник получает возможность приписать себе заслуги за проект, который не
      завершил
    </p>
    <p
      v-if="result == 'win'"
      class="text-center mb-0 mt-3"
      style="color: #2be18b"
    >
      Победа
    </p>
    <p
      v-if="result == 'lose'"
      class="text-center mb-0 mt-3"
      style="color: rgb(239, 20, 20)"
    >
      Поражение
    </p>
  </div>
</template>

<style scoped>
div {
  background: rgba(255, 255, 255, 0.052);
  font-size: 18px;
  font-weight: 400;
}
</style>
