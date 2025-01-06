import db from "$lib/db"


export async function load() {
    return {
        countries: await db.getCountries()
    }
}