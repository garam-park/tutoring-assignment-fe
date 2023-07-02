<template>
  <q-list
    ref="scrollTargetRef"
    class="scroll"
    :style="{ 'max-height': `${parentHeight}px` }"
  >
    <q-infinite-scroll
      @load="onLoad"
      :disable="last_page"
      ref="is"
      :scroll-target="scrollTargetRef"
      class="column wrap justify-center content-around row q-px-md"
    >
      <topic-card v-for="t in topics" :key="t.idx" :topic="t" />
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
      <div v-if="last_page">
        <div class="text-h6 text-center q-mb-lg">
          더 이상 새로운 주제가 없습니다.<q-btn
            icon="refresh"
            flat
            round
            @click="refresh"
          />
        </div>
      </div>
    </q-infinite-scroll>
    <q-inner-loading :showing="on_load" />
    <q-page-sticky position="bottom" expand>
      <q-toolbar>
        <q-space />
        <q-input
          dense
          standout
          v-model="query"
          input-class="query-right"
          class="full-width"
          color="primary"
        >
          <template v-slot:append>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
      </q-toolbar>
    </q-page-sticky>
  </q-list>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { QInfiniteScroll, QList } from 'quasar';
import TopicCard from 'src/components/TopicCard.vue';
import Topic from 'src/entities/Topic';
import { readTopics } from 'src/stores/topic/topics.store';

const parentHeight = ref<number>(0);
onMounted(() => {
  parentHeight.value = parent.outerHeight;
});

const props = defineProps(['grade']);

const page = ref(0);

const is = ref<QInfiniteScroll>();
const scrollTargetRef = ref<Element>();

const topics = ref([] as Topic[]);

const onLoad = (index: number, done: () => void) => {
  console.log('onLoad', index);

  const before_length = topics.value.length;

  readTopics({
    page: ++page.value,
    grade: props.grade,
    query: trim_query.value,
  })
    .then((ts) => {
      topics.value = ts;
      done();
    })
    .finally(() => {
      // 요청전후가 같다면 마지막 페이지
      if (before_length === topics.value.length) {
        last_page.value = true;
      }
    });
};

// 마지막 페이지 일때, 새로고침 할수 있게

const last_page = ref(false);
const on_load = ref(false);
const refresh = () => {
  on_load.value = true;
  const before_length = topics.value.length;

  readTopics({
    page: page.value,
    grade: props.grade,
    query: trim_query.value,
  })
    .then((ts) => {
      topics.value = ts;
    })
    .finally(() => {
      on_load.value = false;
      if (before_length === topics.value.length) {
        last_page.value = true;
      }
    });
};

const query = ref('');
const trim_query = computed(() => {
  return query.value.trim();
});

watch(
  () => query.value,
  () => {
    console.log(query);

    on_load.value = true;
    // query 를 했기 때문에 pull to load 를 초기화 해야함 (page = 1, is.reset(), last_page = false)
    page.value = 1;
    is.value?.reset();
    last_page.value = false;

    readTopics({
      page: page.value,
      grade: props.grade,
      query: trim_query.value,
    })
      .then((ts) => {
        topics.value = ts;
      })
      .finally(() => {
        on_load.value = false;
      });
  }
);
</script>
