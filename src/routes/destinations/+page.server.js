import db from "$lib/db";

export async function load() {
  try {
    const destinations = await db.getAllDestinations();
    return { destinations };
  } catch (error) {
    console.error("Error loading destinations:", error);
    return { destinations: [] };
  }
}
