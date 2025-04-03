<script setup lang="ts"></script>

<template>
  <nav class="flex gap-4 text-stone-200 text-2xl p-4 justify-center">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/headless-ui">Headless UI</RouterLink>
    <RouterLink to="/lib-app">Lib App</RouterLink>
  </nav>
  <main>
    <routerView />
  </main>
</template>

<style scoped></style>
