<template>
  <div class="relative inline-flex items-center justify-center">
    <button
      :class="['px-8 py-2 m-32 rounded-lg text-white shadow z-10 active:scale-95 transition-all duration-100 hover:shadow-inner', buttonColor]"
      @click="createRipple"
      style="position: relative; overflow: hidden;" 
    >
      <slot></slot>
      <span
        class="ripple absolute rounded-full bg-white  opacity-60 pointer-events-none"
        v-if="rippleVisible"
        :style="rippleStyle"
        @transitionend="resetRipple"
      ></span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'blue',
  }
});

const rippleVisible = ref(false);
const rippleStyle = ref({});

const createRipple = (event) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();

  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2; 
  const y = event.clientY - rect.top - size / 2; 

  rippleStyle.value = {
    width: `${size}px`,  
    height: `${size}px`, 
    top: `${y}px`,       
    left: `${x}px`,      
    transition: 'none', 
  };

  rippleVisible.value = true;

  setTimeout(() => {
    rippleVisible.value = false; 
  }, 100); 
};

const buttonColor = computed(() => {
  return {
    'bg-blue-700 hover:bg-blue-800 hover:ring-2 ring-blue-200 ': props.color === 'blue',
    'bg-green-700 hover:bg-green-800 hover:ring-2 ring-green-200 ': props.color === 'green',
    'bg-red-600 hover:bg-red-700 hover:ring-2 ring-red-200 ': props.color === 'red',
    'bg-amber-500 hover:bg-amber-600 hover:ring-2 ring-amber-200 ': props.color === 'yellow',
    'bg-purple-700 hover:bg-purple-800 hover:ring-2 ring-purple-200 ': props.color === 'purple'

  };
});

const resetRipple = () => {
  rippleStyle.value = {};
};
</script>

<style scoped>
.ripple {

  position: absolute;
  transform: scale(2);
  animation: ripple-animation 0.1s linear forwards; 
}

@keyframes ripple-animation {
  to {
   background: rgba(255, 255, 255, 0.329);
    opacity: 40; 
  }
}
</style>
