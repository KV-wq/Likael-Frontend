<script setup>
const props = defineProps({
  type: String,
  text: String,
});
</script>

<template>
  <button
    :class="'w-100 rounded-5 ' + type"
    :disabled="type == 'disabled' ? true : false"
  >
    {{ text }}
  </button>
</template>

<style scoped>
button {
  background: #ff2d30;
  color: white;
  height: 58px;
  border: none;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1) all;
}
.disabled {
  background: #450a0b;
  color: rgba(255, 255, 255, 0.504);
}

.outline {
  background: transparent;
  border: 2px #ff2d30 solid;
}

button:active {
  transform: translateY(2px) scale(0.99);
}
</style>
