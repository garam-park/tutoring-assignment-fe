<template>
  <q-page>
    <q-tab-panels v-model="grade" animated keep-alive>
      <q-tab-panel name="입문">
        <div class="column wrap justify-center content-around row q-px-md">
          <q-card
            v-for="t in topics"
            :key="t.idx"
            flat
            bordered
            class="q-mb-md col full-width"
            style="max-width: 400px; /* 태블릿 크기에 맞게 설정 */"
          >
            <q-img :src="t.imgPath" :ratio="4 / 3">
              <div class="absolute-bottom">
                <div class="text-subtitle2 text-right">{{ t.grade }}</div>
                <div class="text-h6">{{ t.title }}</div>
              </div>
            </q-img>

            <q-card-actions align="right">
              <q-btn flat round color="primary" icon="favorite_outline" />
            </q-card-actions>
          </q-card>
        </div>
      </q-tab-panel>
      <q-tab-panel name="초급">
        <div>초급</div>
      </q-tab-panel>
      <q-tab-panel name="중급">
        <div>중급</div>
      </q-tab-panel>
      <q-tab-panel name="중고급">
        <div>중고급</div>
      </q-tab-panel>
      <q-tab-panel name="고급">
        <div>고급</div>
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
