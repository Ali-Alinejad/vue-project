<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Navbar from '../navbar/Core-navbar.vue'
import CoreChart1 from '../chart/Core-chart1.vue'
import CoreChart2 from '../chart/Core-chart2.vue'
import Cards from '../Cards/Card.vue'
</script>

<template>
  <div class="h-[10vh] w-full">
    <Navbar />
  </div>
  <div class="grid grid-cols-3 xl:grid-cols-3 gap-4 px-4 py-4 mt-10">
    <div
      class="w-full h-[35vh] shadow-2xl border-2 border-gray-300 rounded-xl hover:cursor-pointer hover:ring-2 ring-blue-600 hover:border-white transition-all duration-300"
    >
      <CoreChart1 />
    </div>
    <div
      class="w-full h-[35vh] shadow-2xl border-2 border-gray-300 rounded-xl hover:cursor-pointer hover:ring-2 ring-blue-600 hover:border-white transition-all duration-300 col-span-2"
    >
      <CoreChart2 />
    </div>
    <div
      class="h-[30vh] shadow-2xl border-2 border-gray-300 rounded-xl hover:cursor-pointer hover:ring-2 ring-blue-600 hover:border-white transition-all duration-300 col-span-3 p-4"
    >
      <Cards />
    </div>
    <div
      class="w-full h-24 shadow-2xl border-2 border-gray-300 rounded-xl hover:cursor-pointer hover:ring-2 ring-blue-600 hover:border-white transition-all duration-300 col-span-2"
    ></div>
    <div
      class="w-full h-24 shadow-2xl border-2 border-gray-300 rounded-xl hover:cursor-pointer hover:ring-2 ring-blue-600 hover:border-white transition-all duration-300"
    ></div>
  </div>
</template>

<style scoped></style>
