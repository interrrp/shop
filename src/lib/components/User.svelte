<script>
  import { db, getUser } from "$lib/db";
  import Button from "./Button.svelte";

  async function signIn() {
    await db.auth.signInWithOAuth({ provider: "discord" });
  }

  async function signOut() {
    await db.auth.signOut();

    location.href = "/";
    location.reload();
  }
</script>

{#await getUser() then user}
  {#if user}
    <Button text="Sign out" onclick={signOut} />
  {:else}
    <Button text="Sign in" onclick={signIn} />
  {/if}
{/await}
