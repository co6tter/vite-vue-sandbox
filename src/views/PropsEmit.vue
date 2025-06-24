<script setup lang="ts">
import { ref } from "vue";

import PEChild from "@/components/PEChild.vue";

interface Foo {
  a: number;
  b: number;
}
interface Bar {
  x: string;
  y: string;
}

const foo = ref<Foo>({ a: 1, b: 2 });
const bar = ref<Bar>({ x: "hello", y: "world" });
</script>

<template>
  <div class="container mx-auto p-8">
    <h1>Props Emit</h1>

    <PEChild v-model:foo="foo" v-model:bar="bar" />

    <pre>foo: {{ foo }}</pre>
    <pre>bar: {{ bar }}</pre>
  </div>
</template>
