<script>
  import User from "./User.svelte";
</script>

<nav>
  <div>
    <a href="/"><h2>Shop</h2></a>
  </div>
  <div></div>
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
  }

  h2 {
    font-size: 20px;
  }
</style>
