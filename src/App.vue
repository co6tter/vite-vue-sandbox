<script setup lang="ts">
import HeadlessUIMenu from "@/components/HeadlessUIMenu.vue";
import HeadlessUIListbox from "@/components/HeadlessUIListbox.vue";
import HeadlessUICombobox from "./components/HeadlessUICombobox.vue";
</script>

<template>
  <div class="container mx-auto p-8 flex flex-wrap gap-4">
    <div class="min-w-80 min-h-80">
      <HeadlessUIMenu />
    </div>
    <div class="min-w-80 min-h-80">
      <HeadlessUIListbox />
    </div>
    <div class="min-w-80 min-h-80">
      <HeadlessUICombobox />
    </div>
  </div>
</template>

<style scoped></style>
