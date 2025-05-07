<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";

import { lockResource, releaseResource, sendHeartbeat } from "@/mocks/mockApi";
import { useFormStore } from "@/stores";

const formStore = useFormStore();
const resourceId = "the-home-resource";

const fields = computed(() => formStore.fields);

const availableNumbers = computed(() => formStore.availableNumbers);

const addForm = () => {
  formStore.addForm();
};

const removeForm = (number: number) => {
  formStore.removeForm(number);
};

const removeAllForms = () => {
  formStore.removeAllForms();
};

const HEARTBEAT_INTERVAL = 5000;
let heartbeatTimeout: ReturnType<typeof setTimeout>;

const startHeartbeat = async () => {
  await sendHeartbeat(resourceId);
  heartbeatTimeout = setTimeout(startHeartbeat, HEARTBEAT_INTERVAL);
};

onMounted(async () => {
  await lockResource(resourceId);
  startHeartbeat();
});

onUnmounted(async () => {
  clearTimeout(heartbeatTimeout);
  await releaseResource(resourceId);
});
</script>

<template>
  <div class="container mx-auto p-8">
    <div class="flex gap-4">
      <button
        class="px-4 py-2 bg-violet-600 text-stone-100 rounded"
        @click="addForm"
      >
        フォームを追加
      </button>
      <button
        class="px-4 py-2 bg-pink-600 text-stone-100 rounded"
        @click="removeAllForms"
      >
        すべてのフォームを削除
      </button>
    </div>

    <div v-for="(form, index) in fields" :key="index" class="mt-4">
      <h1>ID {{ form.id }}</h1>
      <div>
        <label :for="`input${index + 1}`">Input {{ index + 1 }}</label>
        <input
          :id="`input${index + 1}`"
          v-model="form.input"
          placeholder="Input"
        />
      </div>

      <div>
        <label>ラジオ</label>
        <input v-model="form.radio" type="radio" value="option1" /> Option 1
        <input v-model="form.radio" type="radio" value="option2" /> Option 2
      </div>

      <div>
        <label>チェックボックス</label>
        <input v-model="form.checkbox" type="checkbox" /> Agree
      </div>

      <div>
        <label for="select">選択</label>
        <select v-model="form.select">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      <button
        class="mt-4 px-4 py-2 bg-fuchsia-600 text-stone-100 rounded"
        @click="removeForm(form.id)"
      >
        フォームを削除
      </button>
    </div>

    <fieldset class="mt-4 border border-stone-400 p-2 text-stone-200">
      <legend>使用可能な番号</legend>
      <ul class="flex gap-4">
        <li v-for="num in availableNumbers" :key="num">{{ num }}</li>
      </ul>
    </fieldset>
  </div>
</template>
