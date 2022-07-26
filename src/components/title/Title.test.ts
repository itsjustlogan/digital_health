import { mount } from '@vue/test-utils'
import Title from './Title.vue'

test('component mounts', () => {
  expect(Title).toBeTruthy()

  const wrapper = mount(Title, {
    props: {
      title: 'My Title',
    },
  })

  expect(wrapper.text()).toContain('My Title')
})
