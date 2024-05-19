import { createClient } from "@supabase/supabase-js";
import { error } from "@sveltejs/kit";

export const db = createClient(
  "https://tntjbazsjyxvmxupoxpm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRudGpiYXpzanl4dm14dXBveHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwODAzNDcsImV4cCI6MjAzMTY1NjM0N30.hbIqGm2xGuo3fDuEVQWAz5KJgIbNAtX8cPb6iUJFgrQ",
);

/** @returns {Promise<import("$lib/types/models").User | null>} */
export async function getUser() {
  const { data, error } = await db.auth.getUser();
  if (error) return null;

  // TODO: Retrieve proper name
  return {
    id: data.user.id,
    name: data.user.id,
  };
}

/** @returns {Promise<import("$lib/types/models").Item[]>} */
export async function getItems() {
  const { data: items } = await db.from("items").select();
  if (!items) error(500, { message: "Unable to load items" });
  return items;
}

/** @returns {Promise<import("$lib/types/models").CartItem[] | null>} */
export async function getCartItems() {
  const user = await getUser();
  if (!user) return null;

  const { data: itemsIdsData } = await db
    .from("cart")
    .select("item_id")
    .eq("user_id", user.id);
  if (!itemsIdsData) return null;
  const itemIds = itemsIdsData.map((i) => i.item_id);

  const { data: items } = await db.from("items").select().in("id", itemIds);
  if (!items) return null;

  return items.map((i) => ({
    ...i,
    count: itemIds.filter((id) => id === i.id).length,
  }));
}
