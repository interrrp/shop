import { getItems } from "$lib/db";

/** @type {import("./$types").PageServerLoad} */
export async function load() {
  return { items: await getItems() };
}
