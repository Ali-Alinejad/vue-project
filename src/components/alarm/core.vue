<template>
  <div
    class="rounded-xl w-[600px] h-32 bg-[#d41434] text-[#ffffff] absolute z-50 left-[70%] top-[80%] opacity-90 transition-opacity duration-500"
    v-if="isOpen"
  >
    <div
      class="flex flex-row w-full gap-5 justify-center items-center px-4 w-full h-full"
    >
      <div class="my-auto text-lg cursor-pointer animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x-circle"
          width="50"
          height="50"
          @click="close"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m15 9-6 6"></path>
          <path d="m9 9 6 6"></path>
        </svg>
      </div>
      <div>
        <div class="font-bold text-lg">خطا در ارتباط با سرور</div>
        <div class="text-base">سامانه ورود به مشکل خورده است</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps(['isOpen'])
const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<style scoped></style>
