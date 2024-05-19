<script>
  import Items from "$lib/components/Items.svelte";

  export let data;
</script>

<main>
  <Items items={data.items} />
</main>

<style>
  main {
    padding: 2rem;
  }
</style>
