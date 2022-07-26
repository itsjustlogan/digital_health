import { mount } from '@vue/test-utils'
import PlayButton from './PlayButton.vue'

test('component emits startCountdown Event', () => {
  expect(PlayButton).toBeTruthy()

  const wrapper = mount(PlayButton)

  wrapper.find('button').trigger('click')

  expect(wrapper.emitted('startCountdown')).toBeTruthy()
  expect(wrapper.emitted()).toHaveProperty('startCountdown')
})
