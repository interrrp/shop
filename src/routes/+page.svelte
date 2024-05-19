<script>
  import Item from "$lib/components/Item.svelte";
</script>

<main>
  <Item
    id={1}
    name="Cheeseburger"
    description="A burger with cheese"
    price={3.0}
  />
</main>

<style>
  main {
    padding: 2rem;
  }
</style>
