<template>
  <Transition name="overlay">
    <div
      v-show="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="close"
    >
      <Transition name="popup">
        <div
          v-if="isOpen"
          class="bg-white p-8 rounded-xl relative max-w-[90%] max-h-[90vh] overflow-y-auto shadow-lg"
        >
          <button
            @click="close"
            class="absolute top-4 right-4 text-2xl leading-none hover:text-black text-gray-500 transition-colors duration-200"
          >
            ×
          </button>
          <slot></slot>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:isOpen"]);

const close = () => {
  emit("update:isOpen", false);
};
</script>

<style lang="scss" scoped>
// Background overlay transitions
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

// Popup content transitions
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.popup-enter-to,
.popup-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
