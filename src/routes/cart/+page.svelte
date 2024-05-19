<script>
  import CartItem from "$lib/components/CartItem.svelte";
  import { getCartItems } from "$lib/db";
</script>

<main>
  <h1>Cart</h1>
  <ul>
    {#await getCartItems() then items}
      {#if items}
        {#each items as item}
          <li><CartItem {...item} /></li>
        {/each}
      {/if}
    {/await}
  </ul>
</main>

<style>
  main {
    width: 50%;
    margin: 0 auto;
    padding: 2rem 0;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
