<script setup lang="ts">
import { reactive } from "vue";

interface Foo {
  a: number;
  b: number;
}
interface Bar {
  x: string;
  y: string;
}

const props = defineProps<{
  foo: Foo;
  bar: Bar;
}>();

const emit = defineEmits<{
  "update:foo": [Foo];
  "update:bar": [Bar];
}>();

const state = reactive({
  foo: { ...props.foo },
  bar: { ...props.bar },
});

function sendFoo() {
  emit("update:foo", {
    a: Number(state.foo.a),
    b: Number(state.foo.b),
  });
}

function sendBar() {
  emit("update:bar", { ...state.bar });
}
</script>

<template>
  <fieldset style="border: 1px solid #aaa; padding: 6px">
    <legend>Grandchild (manual emit)</legend>

    <label
      >a:
      <input v-model="state.foo.a" type="number" @change="sendFoo" />
    </label>
    <label
      >b:
      <input v-model="state.foo.b" type="number" @change="sendFoo" />
    </label>

    <label
      >x:
      <input v-model="state.bar.x" @change="sendBar" />
    </label>
    <label
      >y:
      <input v-model="state.bar.y" @change="sendBar" />
    </label>
  </fieldset>
</template>
