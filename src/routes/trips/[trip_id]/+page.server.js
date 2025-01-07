import db from "$lib/db";

export async function load({ params }) {
    const trip = await db.getTripById(params.trip_id);
    const tripDestinations = await db.getDestinationsFromTrip(params.trip_id);
    return {
      trip,
      tripDestinations
    };
  }
  
