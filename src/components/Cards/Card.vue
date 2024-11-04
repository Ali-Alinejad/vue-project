<script setup>
const data = [
  {
    title: 'میانگین حساب',
    price: 1400,
    sign: '+',
    description: 'این مقدار نشان دهنده میانگین مثبت است.',
  },
  {
    title: 'میانگین حساب',
    price: 1100,
    sign: '-',
    description: 'این مقدار نشان دهنده کاهش است.',
  },
  {
    title: 'میانگین حساب',
    price: 1700,
    sign: '+',
    description: 'این مقدار نشان دهنده افزایش قابل توجهی است.',
  },
  {
    title: 'میانگین حساب',
    price: 900,
    sign: '+',
    description: 'این مقدار به صورت پایدار افزایش یافته است.',
  },
  {
    title: 'میانگین حساب',
    price: 1000,
    sign: '-',
    description: 'این مقدار کاهش یافته و نیاز به بررسی دارد.',
  },
  {
    title: 'میانگین حساب',
    price: 500,
    sign: '-',
    description: 'این مقدار کاهش یافته و نیاز به بررسی دارد.',
  },
]
</script>

<template>
  <div class="w-full h-full flex flex-wrap justify-center gap-4 p-4">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="w-52 h-60 bg-gray-800 text-center rounded-lg shadow-lg flex flex-col justify-between p-4"
    >
      <div>
        <span
          :class="item.sign === '+' ? 'text-green-500' : 'text-red-500'"
          class="text-4xl font-bold"
        >
          {{ item.price }}
        </span>
        <span class="text-white text-xl font-bold block mt-4">
          {{ item.title }}
          <span :class="item.sign === '+' ? 'text-green-500' : 'text-red-500'">
            {{ item.sign }}
          </span>
        </span>
        <p class="text-gray-400 mt-8 text-sm">{{ item.description }}</p>
      </div>
      <button
        class="bg-gray-500 text-white font-semibold py-2 rounded hover:bg-purple-800 transition"
      >
        بازنگری
      </button>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
</style>
