<script setup lang="ts">
import { useField } from "vee-validate";
import { watch } from "vue";

import type { SubFieldConfig } from "@/utils/DynamicFormGroup";

const props = defineProps<{
  fieldPath: string;
  modelValue: unknown;
  sub: SubFieldConfig;
}>();

const emit = defineEmits<{ (e: "update:modelValue", value: unknown): void }>();

const { value, errorMessage } = useField(props.fieldPath, undefined, {
  initialValue: props.modelValue,
});

watch(
  () => props.modelValue,
  (v) => {
    value.value = v;
  },
);
watch(value, (v) => emit("update:modelValue", v));
</script>

<template>
  <div>
    <input
      v-if="props.sub.type === 'text'"
      :id="props.sub.name"
      v-model="value"
      type="text"
      class="border p-2 rounded w-full"
    />

    <input
      v-else-if="props.sub.type === 'number'"
      :id="props.sub.name"
      v-model.number="value"
      type="number"
      class="border p-2 rounded w-full"
    />

    <span v-if="errorMessage" class="text-red-600 text-sm">
      {{ errorMessage }}</span
    >
  </div>
</template>
