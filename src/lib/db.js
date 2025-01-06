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

// Get destinations for a specific country
async function getDestinationsByCountryId(country_id) {
  let destinations = [];
  try {
    const collection = db.collection("destinations");
    const query = { country_id: country_id }; // Filter nach country_id
    destinations = await collection.find(query).toArray();

    destinations.forEach((destination) => {
      destination._id = destination._id.toString(); // Konvertiere ObjectId zu String
    });
  } catch (error) {
    console.log("Error in getDestinationsByCountryId:", error.message);
    throw error;
  }
  return destinations;
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
  getDestinationsByCountryId,
  createTrip,
  updateTrip,
  deleteTrip
};
