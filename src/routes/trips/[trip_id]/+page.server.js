import db from "$lib/db"

export async function load( {params} ) {
    console.log(params)

    return {
        trip: await db.getTripById(params.trip_id)
    }
}