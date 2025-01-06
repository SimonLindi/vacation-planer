import db from "$lib/db"


export async function load() {
    return {
      trips: await db.getTrips()
    }
}