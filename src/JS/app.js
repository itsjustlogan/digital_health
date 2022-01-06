const app = Vue.createApp({
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
      hi: 65,
    }
  },
  methods: {
    reduceTime() {
      this.time === 0 ? this.time = 0 : this.time -= this.second
      if(this.time === 0) {
        clearInterval(this.updater)
        this.seconds = 0
        this.mainMenu = true
      }    
    },
    getSeconds() {
      this.seconds -= 1
      if(this.seconds < 0) {
        this.seconds = 59
      }
      this.seconds < 10 ? this.showZero = true : this.showZero = false
    },
    getMinutes() {
      this.minutes = Math.floor(this.time / this.minute)
    },
    timer() {
      this.reduceTime()
      if(this.time !== 0) {
        this.getSeconds()
        this.getMinutes()
      }
    },
    start() {
      this.updater = setInterval(this.timer, this.second)
      this.mainMenu = false
    },
  },
})

app.mount('#app')