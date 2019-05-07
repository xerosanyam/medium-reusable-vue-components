import { storiesOf } from '@storybook/vue'
import Footer from './Footer'

storiesOf('Footer', module)
  .add('normal', () => ({
    components: { Footer },
    template:
    `
      <Footer/>
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))