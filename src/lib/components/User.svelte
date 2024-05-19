<script>
  import { db, getUser } from "$lib/db";
  import Button from "./Button.svelte";

  async function signIn() {
    await db.auth.signInWithOAuth({ provider: "discord" });
  }
</script>

{#await getUser() then user}
  {#if user}
    <span>{user.name}</span>
  {:else}
    <Button onclick={signIn}>Sign in</Button>
  {/if}
{/await}
