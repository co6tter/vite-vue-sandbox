<script setup lang="ts">
import DynamicFormRendererV1 from "@/components/DynamicFormRendererV1.vue";
import DynamicFormRendererV2 from "@/components/DynamicFormRendererV2.vue";
</script>

<template>
  <div class="container mx-auto p-8">
    <section>
      <h1 class="text-stone-200 text-2xl">V1</h1>
      <DynamicFormRendererV1 class="mt-4" />
    </section>
    <section class="mt-8">
      <h1 class="text-stone-200 text-2xl">V2</h1>
      <DynamicFormRendererV2 class="mt-4" />
    </section>
  </div>
</template>
