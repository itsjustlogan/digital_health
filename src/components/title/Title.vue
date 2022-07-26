<script setup lang="ts">
  const props = defineProps<{
    title: string
  }>()
</script>

<template>
  <section aria-label="app title" id="title" class="fade-2">
    <h1 class="uppercase font-5xl xl:font-6xl">{{ props.title }}</h1>
    <div aria-hidden="true" class="h-1.5 w-4/5 bg-blue-500 mx-auto"></div>
  </section>
</template>

<style></style>
