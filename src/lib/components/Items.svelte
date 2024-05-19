<script>
  import Item from "./Item.svelte";

  /** @type {{ items: import("$lib/types/models").Item[] }} */
  let { items } = $props();
</script>

<ul>
  {#each items as item}
    <li><Item {...item} /></li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
