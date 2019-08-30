<script>
  import Section from '../../util/Section.svelte'
  import TextfieldCollab from '../../../components/atoms/TextfieldCollab.svelte'

  export let placeholder

  const config = {
    title: 'Textfield Collab',
    description: 'Usado para o usuário passar um dado para nós',
    exampleImport: `import TextfieldCollab from './components/atoms/TextfieldCollab.svelte'`,
    exampleUse: `<TextfieldCollab placeholder="${placeholder}" />`,
  }
</script>

<Section {...config}>
  <TextfieldCollab {placeholder} />
</Section>
