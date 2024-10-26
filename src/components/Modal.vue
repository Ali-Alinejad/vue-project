<template>
  <div
    v-if="isVisible"
    :class="[
      'fixed',
      backgroundClass,
      'inset-0 bg-gray-800 bg-opacity-40 flex items-center justify-center z-50',
    ]"
  >
    <div
      :class="[
        'bg-white',

        'w-[80%] max-w-md h-auto rounded-2xl text-right shadow-xl relative',
      ]"
    >
      <div
        class="flex justify-between items-center px-4 py-2 border-b text-right border-gray-200"
      >
        <h3 class="text-lg font-medium text-gray-900">تیتر مدل</h3>
        <span
          class="text-gray-500 scale-150 hover:text-gray-700 cursor-pointer"
          @click="closeModal"
          >&times;</span
        >
      </div>
      <div class="p-6 text-gray-700">
        <slot>{{ status }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

const emit = defineEmits()

const closeModal = () => {
  emit('close')
}

const backgroundClass = computed(() => {
  switch (props.status) {
    case 'transparent':
      return 'bg-transparent'
    case 'blur':
      return 'backdrop-blur-sm'
    case 'dark':
      return 'bg-opacity-80'
    default:
      return ''
  }
})
</script>
