import db from "$lib/db";

export async function load() {
  try {
    const countries = await db.getAllCountries();
    return { countries };
  } catch (error) {
    console.error("Error loading countries:", error);
    return { countries: [] };
  }
}
