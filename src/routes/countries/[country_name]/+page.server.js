import db from "$lib/db";

export async function load({ params }) {
    const destinations = await db.getDestinationsByCountryName(params.country_name);

    return {
        destinations
    };
}
