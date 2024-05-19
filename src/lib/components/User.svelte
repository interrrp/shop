<script>
  import db from "$lib/db";
  import Button from "./Button.svelte";

  async function signIn() {
    await db.auth.signInWithOAuth({ provider: "discord" });
  }

  /** @returns {Promise<import("$lib/types/models").User | null>} */
  async function getUser() {
    const { data, error } = await db.auth.getUser();
    if (error) return null;

    // TODO: Retrieve proper name
    return { name: data.user.id };
  }
</script>

{#await getUser() then user}
  {#if user}
    <span>{user.name}</span>
  {:else}
    <Button onclick={signIn}>Sign in</Button>
  {/if}
{/await}
