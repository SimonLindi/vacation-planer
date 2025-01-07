import db from "$lib/db";

export async function load({ params }) {
    const { country_name } = params;
    const destinations = await db.getDestinationsByCountryName(params.country_name);
    return {
        country_name,
        destinations
    };
}
