<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const data = defineModel<string>()
const { isFocused = false } = defineProps<{ isFocused?:boolean }>()
const input = useTemplateRef<HTMLInputElement>("input")

onMounted(() => {
  if (isFocused && input.value) {
    input.value.focus()
  }
})
</script>

<template>
  <input class="input-string" v-model="data" ref="input">
</template>

<style scoped>
.input-string {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  color: var(--color-fg);
  font-size: 24px;
  width: 200px;
}
.input-string::placeholder {
color: var(--color-inactive);
}
</style>