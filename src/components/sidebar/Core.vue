<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button
      @click="toggleSidebar"
      aria-controls="sidebar-multi-level-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="sidebar-multi-level-sidebar"
      :class="[
        'fixed top-0 left-0 h-screen transition-transform',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'sm:translate-x-0 w-[20%]',
      ]"
      aria-label="Sidebar"
    >
      <div
        class="h-full px-5 py-12 overflow-y-auto bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-600 to-slate-950"
      >
        <div
          class="text-white xl:text-3xl border-b-[1px] w-full pb-10 xl:pl-20 lg:text-xl lg:pl-8"
        >
          پیشخوان اصلی
        </div>
        <ul class="space-y-4 font-medium mt-8">
          <li v-for="(item, index) in sidebarItems" :key="index">
            <a
              href="#"
              class="flex items-center p-8 ring-1 ring-black ring-opacity-20 text-gray-900 rounded-lg dark:text-white hover:shadow-inner hover:shadow-white dark:hover:shadow-inner dark:hover:shadow-black group active:scale-95 transition-all duration-300"
              @click="item.name === 'ورود' ? showAlarm() : null"
            >
              <span v-html="item.icon"></span>
              <span class="flex-1 ms-3 whitespace-nowrap">{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <Alarm v-if="isAlarmVisible" :isOpen="isAlarmVisible" @close="closeAlarm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Alarm from '../alarm/core.vue'

const isOpen = ref(false)
const isAlarmVisible = ref(false)

const sidebarItems = [
  {
    name: 'کابین',
    icon: `<svg class="w-5 h-5 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 22 21"><path clip-rule="evenodd" fill-rule="evenodd" d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/></svg>`,
  },
  {
    name: 'نامه',
    icon: `<svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20"><path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/></svg>`,
  },
  {
    name: 'کاربران',
    icon: `<svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 18"><path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/></svg>`,
  },
  {
    name: 'ورود',
    icon: `<svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" fill="none" viewBox="0 0 18 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/></svg>`,
  },
  {
    name: 'ثبت نام',
    icon: `<svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20"><path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/><path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/></svg>`,
  },
  {
    name: 'تنظیمات',
    icon: `<svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>`,
  },
  {
    name: 'خروج',
    icon: `<svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 24 24"><path d="M15 18l6-6-6-6M21 12H9"/></svg>`,
  },
]

function toggleSidebar() {
  isOpen.value = !isOpen.value
}

function showAlarm() {
  isAlarmVisible.value = true
}

function closeAlarm() {
  isAlarmVisible.value = false
}
</script>

<style scoped></style>
