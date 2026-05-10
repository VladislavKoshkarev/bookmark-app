<script setup lang="ts">
import { ref } from 'vue'
import IconButton from '@/components/ui/IconButton.vue'
import PlusIconBig from '@/icons/PlusIconBig.vue'
import InputString from '@/components/ui/InputString.vue'
import OkIcon from '@/icons/OkIcon.vue'
import { useBookmarksStore } from '@/features/bookmarks/store/bookmarks.store'
import { useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'

const { category_id } = defineProps<{ category_id: number }>()
const isEdited = ref<boolean>(false)
const newUrl = ref<string>()
const bookmarksStore = useBookmarksStore()
const card = useTemplateRef('card')

onClickOutside(card, () => {
  if (isEdited.value) addBookmark()
})

function addBookmark() {
  if (newUrl.value) {
    bookmarksStore.createBookmark(newUrl.value, category_id)
  }
  newUrl.value = ''
  toggleIsEdited()
}

function toggleIsEdited() {
  isEdited.value = !isEdited.value
}
</script>

<template>
  <div class="bookmark-add" ref="card">
    <IconButton :size="48" v-if="!isEdited" @click="toggleIsEdited">
      <PlusIconBig></PlusIconBig>
    </IconButton>
    <div v-else>
      <InputString v-model="newUrl" is-focused />
      <IconButton @click="addBookmark">
        <OkIcon></OkIcon>
      </IconButton>
    </div>
  </div>
</template>

<style scoped>
.bookmark-add {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px dashed var(--color-fg);
}
.bookmark-form {
  display: flex;
  gap: 8px;
}
</style>
