import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useLikeStore = defineStore('like-store', {
  state: () =>
    ({
      likes: reactive({} as { [key: string]: number }),
    } as {
      likes: { [key: string]: number };
    }),
  getters: {
    isLiked: (state) => {
      return (idx: string) => {
        if (idx in state.likes) return state.likes[idx];
      };
    },
  },
  actions: {
    toggleLike(idx: string) {
      this.likes[idx] = this.likes[idx] ?? 0 > 0 ? 0 : 1;
    },
  },
  persist: {
    paths: ['likes'],
  },
});
