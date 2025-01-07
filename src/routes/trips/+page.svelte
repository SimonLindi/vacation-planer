<script>
    export let data;
    const trips = data.trips;
</script>

<style>
    .trip-page {
        background-image: url('/src/images/trip_picture.jpg');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        padding: 2rem;
    }

    .trip-card {
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .trip-title {
        font-weight: bold;
        font-size: 1.2rem;
    }

    .trip-details-btn {
        margin-top: auto;
    }
</style>

<div class="trip-page">
    <div class="container">
        <h1 class="text-center text-white mb-4">Alle Trips</h1>
        <div class="row">
            {#each trips as trip}
                <div class="col-md-4">
                    <div class="trip-card d-flex flex-column">
                        <div class="trip-title text-primary">{trip.country_name}</div>
                        <div>{trip.trip_name}</div>
                        <a href="/trips/{trip._id}" class="btn btn-primary trip-details-btn">Details</a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
