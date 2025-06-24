<script setup lang="ts"></script>

<template>
  <nav class="flex gap-8 text-stone-200 text-2xl p-4 justify-center">
    <RouterLink to="/" class="hover:text-stone-100">Home</RouterLink>
    <RouterLink to="/headless-ui" class="hover:text-stone-100"
      >Headless UI</RouterLink
    >
    <RouterLink to="/dynamic-form" class="hover:text-stone-100"
      >Dynamic Form</RouterLink
    >
    <RouterLink to="/lib-app" class="hover:text-stone-100">Lib App</RouterLink>
  </nav>
  <main>
    <routerView />
  </main>
</template>

<style scoped></style>
