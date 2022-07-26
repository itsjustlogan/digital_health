<script setup lang="ts">
  import { getQuote } from '../../api'

  const data = await getQuote()

  const props = defineProps<{
    quoteHeading: string
    quoteSubheading: string
  }>()
</script>

<template>
  <header class="pt-48 xl:font-lg fade-2">
    <p class="font-bld font-md">{{ props.quoteHeading }}</p>
    <p class="font-bld font-md">{{ props.quoteSubheading }}</p>
    <span aria-label="quote">{{ data.q }}</span> <br />
    <i aria-label="author">- {{ data.a }}</i>
  </header>
</template>

<style></style>
