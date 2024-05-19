<script>
  /** @type {import("$lib/types/models").Item} */
  let { id, name, description, price } = $props();
</script>

<div>
  <h2>{name} (${price})</h2>
  <p>{description}</p>
</div>

<style>
  h2 {
    font-size: 24px;
    margin-bottom: 8px;
  }
</style>
