<script setup lang="ts">
import TextButton from './TextButton.vue'
import { useTemplateRef } from 'vue';
import { onClickOutside } from '@vueuse/core';

const { isOpened, text } = defineProps<{
  isOpened: boolean
  text: string
}>()
const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()
const popup = useTemplateRef('popup')
onClickOutside(popup, () => emit('cancel'))
</script>

<template>
  <Transition name="fade">
    <Teleport to="body">
      <div class="popup__cover" v-if="isOpened">
        <div class="popup" ref="popup">
          {{ text }}
          <div class="popup__actions">
            <TextButton @click="emit('confirm')">Да</TextButton>
            <TextButton @click="emit('cancel')">Нет</TextButton>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style scoped>
.popup__cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-inactive);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup {
  background-color: var(--color-bg);
  padding: 20px;
  border-radius: 20px;
  min-width: 350px;
}
.popup__actions {
  margin-top: 16px;
  display: flex;
  gap: 10px;
}
</style>
