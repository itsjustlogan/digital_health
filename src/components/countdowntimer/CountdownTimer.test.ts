import { mount } from '@vue/test-utils'
import CountdownTimer from './CountdownTimer.vue'

test('timer renders correctly', () => {
  const wrapper = mount(CountdownTimer, {
    props: {
      seconds: 59,
      minutes: 4,
      addZero: false,
    },
  })

  expect(wrapper.text()).toMatch('4:59')
})

test('renders conditional zero correctly', () => {
  expect(CountdownTimer).toBeTruthy()

  const wrapper = mount(CountdownTimer, {
    props: {
      seconds: 7,
      minutes: 4,
      addZero: true,
    },
  })
  expect(wrapper.text()).toContain('4:07')
})
