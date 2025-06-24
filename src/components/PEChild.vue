<script setup lang="ts">
import PEGrandChild from "./PEGrandChild.vue";

interface Foo {
  a: number;
  b: number;
}
interface Bar {
  x: string;
  y: string;
}

const foo = defineModel<Foo>("foo", { required: true });
const bar = defineModel<Bar>("bar", { required: true });
</script>

<template>
  <PEGrandChild v-model:foo="foo" v-model:bar="bar" />

  <fieldset style="border: 1px solid #aaa; margin-top: 12px; padding: 6px">
    <legend>Child — edit foo / bar</legend>
    <input v-model.number="foo.a" type="number" /> |
    <input v-model="bar.x" />
  </fieldset>
</template>
