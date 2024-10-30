<template>
  <div class="flex justify-around flex-row gap-10 items-center h-[100vh]">
    <Button :color="buttonColors.error" @click="isModalVisible = true">
      Test
    </Button>

    <select
      class="w-40 h-10 rounded p-2 border border-gray-300"
      v-model="selectedOption"
      @change="logSelectedOption"
    >
      <option value="transparent">transparent</option>
      <option value="blur">blur</option>
      <option value="dark">dark</option>
    </select>

    <Modal
      :isVisible="isModalVisible"
      @close="isModalVisible = false"
      :status="selectedOption"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'
import Button from './Button/Button.vue'
import { buttonColors } from './Button/ButtonColor'

const isModalVisible = ref(false)
const selectedOption = ref('transparent')

const logSelectedOption = (event: Event) => {
  const target = event.target as HTMLSelectElement
  selectedOption.value = target.value
  console.log(selectedOption.value)
}
</script>
