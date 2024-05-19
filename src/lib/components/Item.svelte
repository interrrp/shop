<script>
  import { goto } from "$app/navigation";
  import { db, getUser } from "$lib/db";
  import Button from "./Button.svelte";

  /** @type {import("$lib/types/models").Item} */
  let { id, name, description, price } = $props();

  async function addToCart() {
    const user = await getUser();
    if (!user) return;

    await db.from("cart").insert({ user_id: user.id, item_id: id });

    goto("/cart");
  }
</script>

<div id="container">
  <h3>{name} (${price})</h3>
  <p>{description}</p>
  <Button text="Add to cart" onclick={addToCart} />
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
