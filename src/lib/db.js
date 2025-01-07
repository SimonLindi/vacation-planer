import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("vacation_planner");

// Get all trips
async function getTrips() {
  let trips = [];
  try {
    const collection = db.collection("trips");
    const query = {}; // Keine Einschränkung, holt alle Trips
    trips = await collection.find(query).toArray();
    
    // Konvertiere ObjectId und andere unsichere Felder in Strings
    trips.forEach((trip) => {
      trip._id = trip._id.toString();
    });
  } catch (error) {
    console.log("Error in getTrips:", error.message);
    throw error; // Fehler werfen, damit er korrekt behandelt wird
  }
  return trips;
}

// Get trip by id
async function getTripById(id) {
  let trip = null;
  try {
    const collection = db.collection("trips");
    const query = { _id: new ObjectId(id) }; // Suche nach ObjectId
    trip = await collection.findOne(query);

    if (trip) {
      trip._id = trip._id.toString(); // Konvertiere ObjectId zu String
    } else {
      console.log("No trip found with id:", id);
    }
  } catch (error) {
    console.log("Error in getTripById:", error.message);
    throw error;
  }
  return trip;
}

// Get destinations for a specific trip
async function getDestinationsFromTrip(trip_id) {
  let destinations = [];
  try {
      const tripsCollection = db.collection("trips");
      const destinationsCollection = db.collection("destinations");

      // Hole den Trip anhand der ID
      const trip = await tripsCollection.findOne({ _id: new ObjectId(trip_id) });
      console.log("Trip gefunden:", trip);

      if (trip && trip.destination_list && trip.destination_list.length > 0) {
          console.log("Destination IDs:", trip.destination_list);

          // Finde alle Destinationen, die im Trip enthalten sind
          destinations = await destinationsCollection
              .find({ destination_id: { $in: trip.destination_list } })
              .project({ name: 1, _id: 0 }) // Nur `name` zurückgeben
              .toArray();
          console.log("Destinationen gefunden:", destinations);
      } else {
          console.log("Keine Destinationen gefunden oder `destination_list` leer.");
      }
  } catch (error) {
      console.log("Fehler in getDestinationsFromTrip:", error.message);
  }
  return destinations;
}


// Get all countries
async function getCountries() {
  let countries = [];
  try {
    const collection = db.collection("countries");
    countries = await collection.find({}).toArray();

    countries.forEach((country) => {
      country._id = country._id.toString(); // Konvertiere ObjectId zu String
    });
  } catch (error) {
    console.log("Error in getCountries:", error.message);
    throw error;
  }
  return countries;
}

async function getDestinationsByCountryName(countryName) {
  try {
      const countriesCollection = db.collection("countries");
      const destinationsCollection = db.collection("destinations");

      // Finde die Country-ID anhand des Namens
      const country = await countriesCollection.findOne({ country_name: countryName });
      if (!country) {
          console.error("Country not found for name:", countryName);
          return [];
      }
      console.log("Country ID gefunden:", country.country_id);

      // Finde die Destinations anhand der Country-ID
      const destinations = await destinationsCollection
          .find({ country_id: country.country_id })
          .project({ name: 1, description: 1, coordinates: 1, destination_id: 1, _id: 0 }) // Felder, die zurückgegeben werden
          .toArray();
      console.log("Gefundene Destinations:", destinations);

      return destinations;
  } catch (error) {
      console.error("Error in getDestinationsByCountryName:", error);
      return [];
  }
}





// Create a new trip
async function createTrip(trip) {
  try {
    const collection = db.collection("trips");
    const result = await collection.insertOne(trip);
    return result.insertedId.toString(); // Konvertiere ObjectId zu String
  } catch (error) {
    console.log("Error in createTrip:", error.message);
    throw error;
  }
}

// Update a trip
async function updateTrip(trip) {
  try {
    const id = trip._id;
    delete trip._id; // _id kann nicht direkt aktualisiert werden
    const collection = db.collection("trips");
    const query = { _id: new ObjectId(id) }; // Suche nach ObjectId
    const result = await collection.updateOne(query, { $set: trip });

    if (result.matchedCount === 0) {
      console.log("No trip found with id:", id);
    } else {
      console.log("Trip updated with id:", id);
    }
    return id;
  } catch (error) {
    console.log("Error in updateTrip:", error.message);
    throw error;
  }
}

// Delete a trip
async function deleteTrip(id) {
  try {
    const collection = db.collection("trips");
    const query = { _id: new ObjectId(id) }; // Suche nach ObjectId
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No trip found with id:", id);
    } else {
      console.log("Trip deleted with id:", id);
    }
    return id;
  } catch (error) {
    console.log("Error in deleteTrip:", error.message);
    throw error;
  }
}

// Export all functions
export default {
  getTrips,
  getTripById,
  getCountries,
  getDestinationsByCountryName,
  createTrip,
  updateTrip,
  getDestinationsFromTrip,
  deleteTrip
};
