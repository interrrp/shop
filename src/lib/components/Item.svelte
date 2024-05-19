<script>
  import Button from "./Button.svelte";

  /** @type {import("$lib/types/models").Item} */
  let { id, name, description, price } = $props();
</script>

<div id="container">
  <h3>{name} (${price})</h3>
  <p>{description}</p>
  <Button text="Add to cart" />
</div>

<style>
  #container {
    line-height: 1;
    width: 20rem;
    padding: 1rem;
    border: 1px solid rgb(0 0 0 / 10%);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h3 {
    font-size: 24px;
  }
</style>
