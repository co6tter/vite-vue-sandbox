<script setup lang="ts">
import HeadlessUICombobox from "./components/HeadlessUICombobox.vue";
import HeadlessUIDialog from "./components/HeadlessUIDialog.vue";
import HeadlessUIDisclosure from "./components/HeadlessUIDisclosure.vue";
import HeadlessUIListbox from "./components/HeadlessUIListbox.vue";
import HeadlessUIMenu from "./components/HeadlessUIMenu.vue";
import HeadlessUIPopover from "./components/HeadlessUIPopover.vue";
import HeadlessUIRadioGroup from "./components/HeadlessUIRadioGroup.vue";
import HeadlessUISwitch from "./components/HeadlessUISwitch.vue";
import HeadlessUITabs from "./components/HeadlessUITabs.vue";
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
    <div class="min-w-3xl min-h-80 mx-auto">
      <HeadlessUIPopover />
    </div>
    <div class="min-w-80 min-h-80">
      <HeadlessUIRadioGroup />
    </div>
    <div class="min-w-80 min-h-80">
      <HeadlessUITabs />
    </div>
  </div>
</template>

<style scoped></style>
