<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Sidebar from './sidebar/Core.vue'
import Show from './show/core.vue'
</script>

<template>
  <div class="flex h-[100vh]">
    <div class="w-[20%] p-4">
      <Sidebar />
    </div>

    <div
      class="w-[80%] p-4 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-gray-400 via-gray-400 to-slate-950"
    >
      <Show />
    </div>
  </div>
</template>

<style scoped></style>
