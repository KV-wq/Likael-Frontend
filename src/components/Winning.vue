<script setup>
const props = defineProps({
  count: Number,
});
</script>

<template>
  <div class="rounded-4">
    <div class="d-flex gap-2 align-items-center">
      <p class="text-white text-center mb-0">+{{ count }}</p>
      <div class="coin" />
    </div>
  </div>
</template>

<style scoped>
.rounded-4 {
  background: rgba(255, 255, 255, 0.052);
  font-size: 48px;
  font-weight: 400;
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.coin {
  width: 50px;
  height: 50px;
  background: #ffc72d;
  border-radius: 100%;
  transform: translateY(-1px);
}
</style>
