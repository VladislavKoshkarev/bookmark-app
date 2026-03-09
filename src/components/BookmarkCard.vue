<script setup lang="ts">
import TrashIconWhite from '@/icons/TrashIconWhite.vue';
import type { Bookmark } from '@/interfaces/bookmark';
import IconButtonBig from './IconButtonBig.vue';
import LinkIconWhite from '@/icons/LinkIconWhite.vue';
import { useBookmarksStore } from '@/stores/bookmarks.store';
import PopupConfirm from './PopupConfirm.vue';
import { ref } from 'vue';


const { id, category_id, title, image, url } = defineProps<Bookmark>()

const bookmarksStore = useBookmarksStore()

const isOpened = ref<boolean>(false)

function openLink() {
  window.open(url)
}

function toggleIsOpened() {
  isOpened.value = !isOpened.value
}

function deleteBookmark() {
  toggleIsOpened()
  bookmarksStore.deleteBookmark(id, category_id)

}

</script>

<template>
  <div class="bookmark-card">
     <div class="bookmark-card__image" :style="{backgroundImage: `url(${image })`}"></div>
     <div class="bookmark-card__title"> {{ title }}</div>
     <div class="bookmark-card__footer">
      <IconButtonBig @click="toggleIsOpened()">
        <TrashIconWhite />
      </IconButtonBig>
      <IconButtonBig @click="openLink">
        <LinkIconWhite />
      </IconButtonBig>
     </div>
     <PopupConfirm 
      text="Хотите удалить закладку?" 
      :is-opened="isOpened"
      @confirm='deleteBookmark'
      @cancel='toggleIsOpened'
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
</style>