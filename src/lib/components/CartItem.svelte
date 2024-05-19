<script>
  /** @type {import("$lib/types/models").CartItem} */
  let { id, name, description, price, count } = $props();
</script>

<div>
  <h2>{count > 1 ? `${count}x` : ""} {name} (${price})</h2>
  <p>{description}</p>
</div>

<style>
  h2 {
    font-size: 24px;
    margin-bottom: 8px;
  }
</style>
