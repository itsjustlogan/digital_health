<template>
  <div>
    <div
      class="bg bg--img w-full h-full pos-fixed bg-cover bg-no-repeat bg-center"
    ></div>
    <header class="app--title font-lg text-white-100 pos-abs fade-2">
      <h1>Digital Health</h1>
    </header>

    <main class="d-flex flex-col h-screen w-full align justify">
      <div
        v-show="mainMenu"
        class="d-flex flex-col w-full align justify fade-2 sm:mt-auto"
      >
        <h2 class="text-white-100 font-lg">
          Put Your Phone Down <br />
          Be Present
        </h2>
        <p class="text-white-100 font-lg">
          Improve your well being & mental health.
        </p>
      </div>

      <form v-show="mainMenu" @submit.prevent id="break fade-2">
        <select
          ref="pickTime"
          name="break--options"
          id="times"
          class="font-base my-2 py-1 px-2 br text-black-50"
          required
        >
          <option :value="defaultVal" selected>{{ defaultLabel }}</option>
          <option v-for="time in options" :key="time.label" :value="time.val">
            {{ time.label }}
          </option>
        </select>
      </form>

      <div v-show="!mainMenu" class="fade-2">
        <p class="text-white-100 font-4xl">
          {{ minutes }}:<span v-show="showZero">0</span>{{ seconds }}
        </p>
      </div>

      <div
        v-show="mainMenu"
        class="fade-2 mt-0 sm:mt-5 sm:mb-auto md:mt-4 lg:mt-3"
      >
        <button
          @click="start"
          form="break"
          type="submit"
          id="button"
          class="border-0 font-base br py-1 px-2 bg-white-100 transition-2 hover:bg-black-100 hover:text-white-100 pointer"
        >
          Take a Break
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      second: 1000,
      minute: 60000,
      time: 0,
      seconds: '00',
      minutes: 0,
      updater: null,
      mainMenu: true,
      showZero: false,
      defaultVal: 300000,
      defaultLabel: '5 Minutes',
      options: [
        { val: 1200000, label: '20 minutes' },
        { val: 1800000, label: '30 minutes' },
        { val: 2400000, label: '40 minutes' },
        { val: 3600000, label: '60 minutes' },
        { val: 5400000, label: '90 minutes' },
        { val: 7200000, label: '120 minutes' },
      ],
    }
  },
  methods: {
    start() {
      this.time = this.$refs.pickTime.value
      this.updater = setInterval(this.timer, this.second)
      this.mainMenu = false
      console.log(this.time)
    },
    timer() {
      this.reduceTime()
      if (this.time !== 0) {
        this.getSeconds()
        this.getMinutes()
      }
    },
    reduceTime() {
      this.time === 0 ? (this.time = 0) : (this.time -= this.second)
      if (this.time === 0) {
        clearInterval(this.updater)
        this.seconds = 0
        this.mainMenu = true
      }
    },
    getSeconds() {
      this.seconds -= 1
      if (this.seconds < 0) {
        this.seconds = 59
      }
      this.seconds < 10 ? (this.showZero = true) : (this.showZero = false)
    },
    getMinutes() {
      this.minutes = Math.floor(this.time / this.minute)
    },
  },
}
</script>
