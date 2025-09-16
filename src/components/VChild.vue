<template>
  <VGrandChild>
    <template v-for="(_, name) in slots" #[name]="slotData" :key="name">
      <slot :name="name" v-bind="slotData || {}"></slot>
    </template>
  </VGrandChild>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

import VGrandChild from "./VGrandChild.vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
defineSlots<Record<string, (props?: any) => any>>();
const slots = useSlots();
</script>
