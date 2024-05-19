<button><slot /></button>

<style>
  button {
    background-color: black;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 100ms;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
