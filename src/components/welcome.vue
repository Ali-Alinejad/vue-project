<template>
  <div
    class="flex justify-around flex-row gap-10 items-center place-items-center h-[100vh]"
  >
    <button
      class="p-4 border-2 rounded-md hover: transition-all duration-100 hover:shadow-inner"
      @click="showModal = true"
    >
      تست
    </button>

    <select
      class="w-40 h-10 rounded p-2"
      v-model="selectedOption"
      @change="logSelectedOption"
    >
      <option value="transparent">transparent</option>
      <option value="blur">blur</option>
      <option value="dark">dark</option>
    </select>

    <Modal
      :isVisible="showModal"
      @close="showModal = false"
      :status="selectedOption"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const showModal = ref(false)
const selectedOption = ref('transparent')

const logSelectedOption = event => {
  const status = event.target.value
  console.log(status)
  selectedOption.value = status
}
</script>
