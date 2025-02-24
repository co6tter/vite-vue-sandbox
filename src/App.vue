<script setup lang="ts">
import HeadlessUIMenu from "@/components/HeadlessUIMenu.vue";
import HeadlessUIListbox from "@/components/HeadlessUIListbox.vue";
import HeadlessUICombobox from "./components/HeadlessUICombobox.vue";
import HeadlessUISwitch from "./components/HeadlessUISwitch.vue";
import HeadlessUIDisclosure from "./components/HeadlessUIDisclosure.vue";
import HeadlessUIDialog from "./components/HeadlessUIDialog.vue";
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
    <div class="min-w-80 min-h-80">
      <HeadlessUISwitch />
    </div>
    <div class="min-w-80 min-h-80">
      <HeadlessUIDisclosure />
    </div>
    <div class="min-w-80 min-h-80">
      <HeadlessUIDialog />
    </div>
  </div>
</template>

<style scoped></style>
