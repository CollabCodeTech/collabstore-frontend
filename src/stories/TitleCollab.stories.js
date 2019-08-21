import { storiesOf } from '@storybook/svelte'
import TitleCollabView from './views/atom/TitleCollabView.svelte'

storiesOf('TitleCollab', module).add('default', () => ({
  Component: TitleCollabView,
  props: {
    content: 'Subs',
  },
}))
