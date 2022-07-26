<script setup lang="ts">
  const props = defineProps<{
    seconds: number
    minutes: number
    addZero: boolean
  }>()

  // todo: add progress circle
</script>

<template>
  <p aria-label="countdown" class="font-bld font-4xl pt-20">
    {{ props.minutes }}:<span v-if="props.addZero">0</span>{{ props.seconds }}
  </p>
</template>

<style>
  /* .track {
    fill: none;
    stroke: lightgrey;
  }
  .progress {
    fill: none;
    stroke: black;
    stroke-width: 10;
    transform: rotate(-90deg);
    transform-origin: center;
  } */
</style>
