<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-fg);
  color: var(--color-bg);
  cursor: pointer;
  border-radius: 50px;
  border: none;
  height: 50px;
  padding: 12px 24px;
  font-size: 18px;
}
.button :hover {
  background: var(--color-fg-hover);
}
</style>
