<script setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <div class="rounded-4 d-flex align-items-center justify-content-between p-3">
    <p class="text-white mb-0">{{ text }}</p>
    <img src="../assets/arrow.svg" class="mx-2" />
  </div>
</template>

<style scoped>
div {
  height: 58px;
  background: rgba(255, 255, 255, 0.055);
}
p {
  font-size: 18px;
}
</style>
