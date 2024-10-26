<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600"
  >
    <form
      class="bg-white p-8 rounded-lg shadow-lg w-96"
      @submit.prevent="handleLogin"
    >
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">
        ورود به حساب کاربری
      </h1>

      <div class="mb-4">
        <label
          for="firstName"
          class="block text-right text-sm font-medium text-gray-700"
          >نام</label
        >
        <input
          v-model="firstName"
          id="firstName"
          type="text"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div class="mb-4">
        <label
          for="lastName"
          class="block text-right text-sm font-medium text-gray-700"
          >نام خانوادگی</label
        >
        <input
          v-model="lastName"
          id="lastName"
          type="text"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div class="mb-4">
        <label
          for="password"
          class="block text-right text-sm font-medium text-gray-700"
          >رمز عبور</label
        >
        <input
          v-model="password"
          id="password"
          type="password"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div class="flex justify-between mb-4">
        <a href="#" class="text-sm text-blue-600 hover:underline"
          >فراموشی رمز عبور؟</a
        >
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        ورود
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  router.push({ name: 'welcome' })

  console.log(`نام: ${firstName.value}`)
  console.log(`نام خانوادگی: ${lastName.value}`)
  console.log(`رمز عبور: ${password.value}`)
}
</script>

<style scoped></style>
