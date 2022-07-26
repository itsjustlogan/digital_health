<script setup lang="ts">
  const emits = defineEmits(['startCountdown'])

  // clicking play button starts the timer
  function emitStart() {
    emits('startCountdown')
  }
</script>

<template>
  <button
    aria-label="start button"
    @click="emitStart"
    style="background-color: transparent"
    class="border-style-none mt-40 fade-4"
  >
    <i
      aria-hidden="true"
      class="fa-solid fa-play cursor-pointer font-3xl xl:font-4xl p-2.5 hover:scale-90 transition-2"
    ></i>
  </button>
</template>

<style></style>
