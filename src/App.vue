<script setup lang="ts">
  import { ref } from 'vue'
  import Title from './components/title/Title.vue'
  import Quote from './components/quote/Quote.vue'
  import TimeSelector from './components/timeselector/TimeSelector.vue'
  import PlayButton from './components/playbutton/PlayButton.vue'
  import Timer from './modules/timer'
  import CountdownTimer from './components/countdowntimer/CountdownTimer.vue'

  const title = 'Rift'
  const heading = 'Put Your Phone Down'
  const subheading = 'Be Present'

  // get selectedTime value from child component TimeSelector
  const selector = ref()

  // create a new instance of the timer class
  const TimerInstance = new Timer()
</script>

<template>
  <div class="md:max-w-3/5 md:mx-auto">
    <Title :title="title" />
    <main v-show="TimerInstance.showMainMenu" class="fade-2">
      <Suspense>
        <Quote :quoteHeading="heading" :quoteSubheading="subheading" />
      </Suspense>
      <TimeSelector ref="selector" />
      <PlayButton
        @start-countdown="TimerInstance.startTimer(selector.selectedTime)"
      />
    </main>
    <CountdownTimer
      v-show="!TimerInstance.showMainMenu"
      class="fade-2"
      :minutes="TimerInstance.mins"
      :seconds="TimerInstance.secs"
      :addZero="TimerInstance.addZero"
    />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
