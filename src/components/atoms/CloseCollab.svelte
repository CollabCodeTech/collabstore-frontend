<style>
  .close-collab {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 22px;
    min-height: 22px;
    background: none;
    border: none;
  }

  .close-collab::before,
  .close-collab::after {
    content: "";
    position: absolute;
    width: 120%;
    height: 4px;
    border-radius: 2px;
    background-color: #6c6c6c;
  }

  .close-collab::before {
    transform: rotate(45deg);
  }

  .close-collab::after {
    transform: rotate(-45deg);
  }

  .close-collab > .content {
    display: block;
    text-indent: -9999px;
  }
</style>

<button class="close-collab">
  <span class="content">Fechar</span>
</button>
