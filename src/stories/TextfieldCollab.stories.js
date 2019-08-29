import { storiesOf } from '@storybook/svelte'
import TextfieldCollab from './views/atom/TextfieldCollabView.svelte'

storiesOf('TextfieldCollab', module).add('Default', () => ({
  Component: TextfieldCollab,
  props: {
    placeholder: 'Nome',
  },
}))
