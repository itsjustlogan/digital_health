<script setup lang="ts">
  import { Ref, ref } from 'vue'
  import { MINUTE_IN_MILLISECONDS } from '../../constants'

  // convert minutes to milliseconds
  function convertToMilliseconds(minute: number): number {
    return minute * MINUTE_IN_MILLISECONDS
  }

  // time options to be looped through in select options
  const timerOptions = [
    { id: 1, timeValue: convertToMilliseconds(5), timeLabel: '5:00' },
    { id: 2, timeValue: convertToMilliseconds(20), timeLabel: '20:00' },
    { id: 3, timeValue: convertToMilliseconds(30), timeLabel: '30:00' },
    { id: 4, timeValue: convertToMilliseconds(40), timeLabel: '40:00' },
    { id: 5, timeValue: convertToMilliseconds(60), timeLabel: '60:00' },
    { id: 6, timeValue: convertToMilliseconds(90), timeLabel: '90:00' },
    { id: 7, timeValue: convertToMilliseconds(120), timeLabel: '120:00' },
  ]

  const selectedTime: Ref<number | undefined> = ref()

  // set the default selected value in the dropdown form
  selectedTime.value = timerOptions[0].timeValue

  // expose the selected value to the parent component
  defineExpose({
    selectedTime,
  })
</script>

<template>
  <form @submit.prevent id="time-selector">
    <select
      v-model="selectedTime"
      class="cursor-pointer border-0 border-b-2 outline-none font-bld font-base text-center xl:font-md"
      style="background-color: transparent; color: #2c3e50"
      name="timer-options"
      aria-label="break duration selection dropdown menu"
    >
      <option
        v-for="option in timerOptions"
        :key="option.id"
        :value="option.timeValue"
      >
        {{ option.timeLabel }}
      </option>
    </select>
  </form>
</template>

<style></style>
