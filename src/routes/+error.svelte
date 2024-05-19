<script>
  import { page } from "$app/stores";
</script>

<main>
  <h1>Error</h1>
  <p>{$page.error?.message}</p>
</main>

<style>
  main {
    width: 50%;
    margin: 0 auto;
    padding: 2rem 0;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 1rem;
  }
</style>
