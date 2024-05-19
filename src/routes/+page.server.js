import db from "$lib/db";
import { error } from "@sveltejs/kit";

/** @type {import("./$types").PageServerLoad} */
export async function load() {
  /** @type {{ data: import("$lib/types/models").Item[] | null }} */
  const { data: items } = await db.from("items").select();

  if (!items) error(500, { message: "Unable to load items" });

  return { items };
}
