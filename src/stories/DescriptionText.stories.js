import { storiesOf } from '@storybook/svelte'
import DescriptionText from './views/atoms/DescriptionTextView.svelte'

storiesOf('DescriptionText', module).add('Default', () => ({
  Component: DescriptionText,
  props: {
    content: 'Exemplo de conteúdo',
  },
}))
