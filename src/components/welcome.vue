<!-- eslint-disable no-unused-vars -->
<template>
  <div
    class="flex justify-around flex-row gap-10 items-center place-items-center h-[100vh]"
  >
    <Button :color="primary" @click="showModal"> test </Button>

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
import Button from './Button.vue'

const showModal = ref(false)
const selectedOption = ref('transparent')

const logSelectedOption = event => {
  const status = event.target.value
  console.log(status)
  selectedOption.value = status
}
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  default: {
    type: String,
    default: 'blue',
  },
  secondary: {
    type: String,
    default: 'purple',
  },
  primary: {
    type: String,
    default: 'green',
  },
  error: {
    type: String,
    default: 'red',
  },
  warning: {
    type: String,
    default: 'yellow',
  },
})
</script>
