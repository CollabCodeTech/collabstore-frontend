<script>
  import Section from '../../util/Section.svelte'
  import DescriptionText from '../../../components/atoms/DescriptionText.svelte'

  export let content

  const config = {
    title: 'Description Text',
    description: 'Usamos para descrever algo ao usuário',
    exampleImport: `import DescriptionText from './components/atoms/DescriptionText.svelte'`,
    exampleUse: `<DescriptionText content='${content}' />`,
  }
</script>

<Section {...config}>
  <DescriptionText {content} />
</Section>
