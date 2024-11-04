<template>
  <nav class="shadow-inner border-2 ring-4 rounded-3xl">
    <div class="max-w-7xl flex justify-between items-center p-4 mx-auto">
      <div class="flex items-center space-x-4">
        <div class="text-2xl font-bold text-white">MyApp</div>
        <button
          @click="refresh"
          class="text-white hover:text-gray-300"
        ></button>
      </div>

      <div class="flex items-center space-x-6">
        <button class="relative">
          <svg
            class="w-6 h-6 text-white hover:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 12H3" />
            <path d="M12 3v18" />
          </svg>
        </button>

        <div class="flex items-center space-x-8">
          <div class="flex flex-row-reverse text-right">
            <div class="pl-4">
              <img
                src="https://via.placeholder.com/2"
                alt="Profile"
                class="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <span
              class="text-3xl text-white font-semibold border-l-[1px] ml-4 pl-8"
              >ادمین
            </span>

            <span class="text-md m-2 text-gray-200">{{ currentDate }}</span>
            <span class="text-md font-mono m-2 text-gray-200">{{
              currentTime
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTime = ref('')
const currentDate = ref('')

function updateDateTime() {
  const now = new Date()
  currentDate.value = now.toLocaleDateString('fa-IR', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  })
  currentTime.value = now.toLocaleTimeString('fa-IR', {
    minute: '2-digit',
    hour: '2-digit',
  })
}

function refresh() {
  console.log('Refreshing...')
  updateDateTime()
}

onMounted(() => {
  updateDateTime()
  setInterval(updateDateTime, 60000)
})
</script>

<style scoped></style>
