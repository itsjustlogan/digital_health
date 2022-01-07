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
      defaultVal: 300000,
      defaultLabel: '5 Minutes',
      options: [
        {val: 1200000, label: '20 minutes'},
        {val: 1800000, label: '30 minutes'},
        {val: 2400000, label: '40 minutes'},
        {val: 3600000, label: '60 minutes'},
        {val: 5400000, label: '90 minutes'},
        {val: 7200000, label: '120 minutes'},
      ],
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
      this.time = this.$refs.pickTime.value
      this.updater = setInterval(this.timer, this.second)
      this.mainMenu = false
      console.log(this.time)
    },
  },
})

app.mount('#app')