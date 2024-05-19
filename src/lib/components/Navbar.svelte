<script>
  import { getUser } from "$lib/db";
  import User from "./User.svelte";
</script>

<nav>
  <div>
    <a href="/">Shop</a>
  </div>
  <div>
    {#await getUser() then user}
      {#if user}
        <a href="/cart">Cart</a>
      {/if}
    {/await}
  </div>
  <div>
    <User />
  </div>
</nav>

<style>
  nav {
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid rgb(0 0 0 / 10%);
    display: flex;
    justify-content: space-between;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: 20px;
  }
</style>
