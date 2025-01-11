<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  text: String,
});
</script>

<template>
  <div
    class="w-100 card rounded-4 bg-transparent border border-3 d-flex flex-column justify-content-end r"
    :class="active ? 'active' : ''"
  >
    <p class="text-white text-center opacity-50">{{ text }}</p>
  </div>
</template>

<style scoped>
div {
  height: 260px;
  border-color: rgba(255, 255, 255, 0.108) !important;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.active {
  border-color: #ff2d30 !important;
  > p {
    opacity: 1 !important;
  }
}
</style>
