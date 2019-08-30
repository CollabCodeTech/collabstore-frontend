import { storiesOf } from '@storybook/svelte'
import TextfieldCollab from './views/atoms/TextfieldCollabView.svelte'

storiesOf('TextfieldCollab', module).add('Default', () => ({
  Component: TextfieldCollab,
  props: {
    placeholder: 'Nome',
  },
}))
