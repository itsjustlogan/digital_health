import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import Quote from './Quote.vue'

test.todo('mounts correctly', async () => {
  expect(Quote).toBeTruthy()

  const TestComponent = mount(
    defineComponent({
      components: { Quote },
      template: `<Suspense>
      <Quote ref="quo" :quoteHeading="this.heading" :quoteSubheading="subheading"/>
      </Suspense>`,
      data() {
        return {
          heading: 'My Heading',
          subheading: 'My Subheading',
        }
      },
    })
  )
})
