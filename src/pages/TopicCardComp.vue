<template>
  <q-card
    :key="topic.idx"
    flat
    bordered
    class="q-mb-md col full-width"
    style="max-width: 400px; /* 태블릿 크기에 맞게 설정 */"
  >
    <q-img :src="topic.imgPath" :ratio="4 / 3">
      <div class="absolute-bottom">
        <div class="text-subtitle2 text-right">{{ topic.grade }}</div>
        <div class="text-h6">{{ topic.title }}</div>
      </div>
    </q-img>

    <q-card-actions align="right">
      <q-btn
        flat
        round
        :color="isLiked(topic.idx) ?? 0 > 0 ? 'primary' : 'grey'"
        :icon="isLiked(topic.idx) ?? 0 > 0 ? 'favorite' : 'favorite_outline'"
        @click="toggleLike(topic.idx)"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import Topic from 'src/entities/Topic';
import { useLikeStore } from 'src/stores/topic/likes.store';

defineProps<{ topic: Topic }>();

const likeStore = useLikeStore();
const isLiked = likeStore.isLiked;
const toggleLike = likeStore.toggleLike;
</script>
