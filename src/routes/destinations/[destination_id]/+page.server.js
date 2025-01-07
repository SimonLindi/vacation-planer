import db from "$lib/db";

export async function load({ params }) {
  try {
    const destination = await db.getDestinationById(params.destination_id);
    return { destination };
  } catch (error) {
    console.error("Error loading destination details:", error);
    return { destination: null };
  }
}
