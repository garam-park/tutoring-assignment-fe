<template>
  <q-page>
    <q-tab-panels v-model="grade" animated keep-alive>
      <q-tab-panel name="입문">
        <topics-panel grade="입문" />
      </q-tab-panel>
      <q-tab-panel name="초급">
        <topics-panel grade="초급" />
      </q-tab-panel>
      <q-tab-panel name="중급">
        <topics-panel grade="중급" />
      </q-tab-panel>
      <q-tab-panel name="중고급">
        <topics-panel grade="중고급" />
      </q-tab-panel>
      <q-tab-panel name="고급">
        <topics-panel grade="고급" />
      </q-tab-panel>
    </q-tab-panels>
    <q-header class="bg-white">
      <q-toolbar class="text-primary">
        <q-tabs
          v-model="grade"
          dense
          align="justify"
          narrow-indicator
          class="full-width"
        >
          <q-tab
            v-for="op in options"
            :name="op.value"
            :label="op.label"
            :key="op.value"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { readTopics } from 'src/stores/topic/topics.store';
import Topic from 'src/entities/Topic';
import TopicsPanel from 'src/components/TopicsPanel.vue';

const grade = ref<string>('입문');

const options = [
  { label: '입문', value: '입문' },
  { label: '초급', value: '초급' },
  { label: '중급', value: '중급' },
  { label: '중고급', value: '중고급' },
  { label: '고급', value: '고급' },
];

const topics = ref<Topic[]>([]);
readTopics({ page: 1, per_page: 10, grade: '입문' }).then((ts) => {
  topics.value = ts;
});
</script>

<style>
.q-tab-panel {
  padding: 0px;
}
</style>
