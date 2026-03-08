<script setup lang="ts">
import TrashIconWhite from '@/icons/TrashIconWhite.vue';
import type { Bookmark } from '@/interfaces/bookmark';
import IconButtonBig from './IconButtonBig.vue';
import LinkIconWhite from '@/icons/LinkIconWhite.vue';
import { useBookmarksStore } from '@/stores/bookmarks.store';


const { id, category_id, title, image, url } = defineProps<Bookmark>()

const bookmarksStore = useBookmarksStore()

function openLink() {
  window.open(url)
}
</script>

<template>
  <div class="bookmark-card">
     <div class="bookmark-card__image" :style="{backgroundImage: `url(${image })`}"></div>
     <div class="bookmark-card__title"> {{ title }}</div>
     <div class="bookmark-card__footer">
      <IconButtonBig @click="bookmarksStore.deleteBookmark(id, category_id)">
        <TrashIconWhite />
      </IconButtonBig>
      <IconButtonBig @click="openLink">
        <LinkIconWhite />
      </IconButtonBig>
     </div>
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