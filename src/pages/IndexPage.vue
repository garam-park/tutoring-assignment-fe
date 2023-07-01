<template>
  <q-page class="row items-center justify-evenly">
    <q-page>
      <div class="justify-center q-gutter-lg">
        <q-tab-panels v-model="grade" animated keep-alive>
          <q-tab-panel name="입문">
            <div>입문</div>
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
      </div>
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
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const grade = ref<string>('입문');

const options = [
  { label: '입문', value: '입문' },
  { label: '초급', value: '초급' },
  { label: '중급', value: '중급' },
  { label: '중고급', value: '중고급' },
  { label: '고급', value: '고급' },
];
</script>
