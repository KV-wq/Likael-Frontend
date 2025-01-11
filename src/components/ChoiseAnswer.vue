<script setup>
const props = defineProps({
  type: String,
  text: String,
});
</script>

<template>
  <button :class="'w-100 rounded-4 mb-3 ' + type">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  color: white;
  height: 58px;
  border: 2px rgba(255, 255, 255, 0.1) solid;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1) all;
  background: transparent;
}

.active {
  border: 2px #ff2d30 solid;
}

button:active {
  transform: translateY(2px) scale(0.99);
}
</style>
