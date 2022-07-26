import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import TimeSelector from './TimeSelector.vue'

test.todo('contains select selector element', () => {
  expect(TimeSelector).toBeTruthy()

  const TestComponent = defineComponent({
    components: { TimeSelector },
    template: `
      <TimeSelector/>
      `,
    // data() {
    //   return {
    //     heading: 'My Heading',
    //     subheading: 'My Subheading',
    //   }
    // },
  })

  const wrapper = mount(TestComponent)
})
