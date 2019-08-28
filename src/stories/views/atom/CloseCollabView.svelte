<script>
  import Section from '../../util/Section.svelte'

  import CloseCollab from '../../../components/atoms/CloseCollab.svelte'

  const config = {
    title: 'Close Collab',
    description: 'Usamos ele para indicar que algo pode ser fechado!',
    exampleUse: `<CloseCollab />`,
    exampleImport: `import CloseCollab from './components/atoms/CloseCollab.svelte'`,
  }
</script>

<Section {...config}>
  <CloseCollab />
</Section>
