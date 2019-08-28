<script>
  export let content

  import Section from '../../util/Section.svelte'
  import TitleCollab from '../../../components/atoms/TitleCollab.svelte'

  const config = {
    title: 'Title Collab',
    description:
      'Use esse Atom com cuidado, ele é uma tag h1, portanto recomendo você usar apenas um por página para manter um SEO feliz!',
    exampleUse: `<TitleCollab content="${content}" />`,
    exampleImport: `import TitleCollab from './components/atoms/TitleCollab.svelte'`,
  }
</script>

<Section {...config}>
  <TitleCollab {content} />
</Section>
