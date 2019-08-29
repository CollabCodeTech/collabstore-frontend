<script>
  export let placeholder = 'placeholder not defined'
  let filled = false

  function handleChange() {
    this.value !== '' ? (filled = true) : (filled = false)
  }
</script>

<style>
  .textfield-collab {
    display: flex;
    align-items: center;
    position: relative;
    color: var(--color-gray);
    background-color: var(--color-dark);
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
    height: 64px;
    width: 100%;
    border-radius: var(--gap-radius);
    font-size: var(--size-second);
  }

  .input {
    color: var(--color-ordinary-text);
    background-color: transparent;
    padding: 0 var(--gap-small);
    border: none;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    font-size: inherit;
    transition: transform 200ms linear;
  }

  .placeholder {
    position: absolute;
    left: var(--gap-small);
    transform-origin: top left;
    transition: transform 200ms linear;
  }

  .textfield-collab.filled > .input,
  .input:focus {
    transform: translateY(10%);
  }

  .textfield-collab.filled > .placeholder,
  .input:focus + .placeholder {
    transform: translateY(-70%) scale(0.78);
  }
</style>

<label class={`textfield-collab ${filled && 'filled'}`}>
  <input type="text" class="input" on:change={handleChange} />
  <span class="placeholder">{placeholder}</span>
</label>
