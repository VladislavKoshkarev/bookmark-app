<script setup lang="ts">
import TrashIconWhite from '@/icons/TrashIconWhite.vue'
import type { Bookmark } from '@/interfaces/bookmark'
import IconButtonBig from './IconButtonBig.vue'
import LinkIconWhite from '@/icons/LinkIconWhite.vue'
import { useBookmarksStore } from '@/stores/bookmarks.store'
import PopupConfirm from './PopupConfirm.vue'
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import OkIcon from '@/icons/OkIcon.vue'

const { id, category_id, title, image, url } = defineProps<Bookmark>()

const bookmarksStore = useBookmarksStore()

const isOpened = ref<boolean>(false)

const isCopied = ref<boolean>(false)

const { copy } = useClipboard()

function openLink() {
  window.open(url)
}

function copyLink() {
  isCopied.value = true
  copy(url);
  setTimeout(() => {
    isCopied.value = false
  }, 1000)
}

function toggleIsOpened() {
  isOpened.value = !isOpened.value
}

function deleteBookmark() {
  toggleIsOpened()
  bookmarksStore.deleteBookmark(id, category_id)
}

function clickHandler(event: Event) {
  if (event.currentTarget instanceof HTMLElement) {
    switch (event.currentTarget.className) {
      case 'button-icon-big bookmark__btn-delete': 
      toggleIsOpened();
      break;
      case 'button-icon-big bookmark__btn-copy': 
      copyLink()
      break;
      default: openLink();
    }
  }
}
</script>

<template>
  <div class="bookmark-card" @click="clickHandler">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="bookmark-card__title">{{ title }}</div>
    <div class="bookmark-card__footer">
        <IconButtonBig @click.stop="(event: Event) => clickHandler(event)" class="bookmark__btn-delete" :class="{ active: isOpened}">
          <TrashIconWhite />
        </IconButtonBig>
        <IconButtonBig @click.stop="(event: Event) => clickHandler(event)" class="bookmark__btn-copy" :class="{ active: isCopied}">
          <OkIcon v-if="isCopied"/>
          <LinkIconWhite v-else/>
        </IconButtonBig>
    </div>
    <PopupConfirm
      text="Хотите удалить закладку?"
      :is-opened="isOpened"
      @confirm="deleteBookmark"
      @cancel="toggleIsOpened"
    ></PopupConfirm>
  </div>
</template>

<style scoped>
.bookmark-card {
  border-radius: 30px;
  background: var(--color-fg);
  box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  cursor: pointer;
}
.bookmark-card:hover {
  background: var(--color-fg-hover);
}
.bookmark-card__image {
  min-height: 160px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}
.bookmark-card__title {
  color: var(--color-bg);
  font-size: 16px;
  font-weight: 500;
}
.bookmark-card__footer {
  display: flex;
  justify-content: space-between;
}
.active {
  transform: scale(1.5);
  transition: transform 0.3s ease;
}
</style>
