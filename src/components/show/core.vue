<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Navbar from '../navbar/core.vue'
</script>

<template>
  <div class="h-[10vh] w-full bg-sky-200">
    <Navbar />
  </div>
  <div class="grid grid-cols-3 xl:grid-cols-3 gap-4 px-4 py-4">
    <div class="w-full h-24 bg-blue-600 rounded-xl"></div>
    <div class="w-full h-24 bg-blue-900 rounded-xl col-span-2"></div>
    <div class="w-full h-24 bg-blue-900 rounded-xl col-span-2"></div>
    <div class="w-full h-24 bg-blue-600 rounded-xl"></div>
    <div class="w-full h-24 bg-blue-600 rounded-xl"></div>
    <div class="w-full h-24 bg-blue-900 rounded-xl col-span-2"></div>
  </div>
</template>

<style scoped></style>
