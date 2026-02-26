<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
</script>

<template>
  <button class="button-icon-big" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot />
  </button>
</template>

<style scoped>
.button-icon-big {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 3px solid var(--color-bg);
}
.button-icon:hover {
  background: var(--color-bg-hover);
}
</style>