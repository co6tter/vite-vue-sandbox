<script setup lang="ts">
import { nanoid } from "nanoid";
import { onMounted, onUnmounted } from "vue";

import { lockResource, releaseResource, sendHeartbeat } from "@/mocks/mockApi";

const id = nanoid();
console.log(id);
const resourceId = "the-home-resource";

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
    <h1 class="text-stone-200 text-2xl">The Home</h1>
  </div>
</template>
