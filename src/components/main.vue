<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Sidebar from './sidebar/Core.vue'
import Show from './show/core.vue'
</script>

<template>
  <div class="flex h-[100vh]">
    <div class="w-[20%] bg-blue-200 p-4">
      <Sidebar />
    </div>

    <div class="w-[80%] bg-slate-500 p-4">
      <Show />
    </div>
  </div>
</template>

<style scoped></style>
