<script>
    export let data;
    const { trip, tripDestinations } = data;

    function encodeDestinationId(id) {
        return encodeURIComponent(id);
    }
</script>

<style>
    .card {
        margin-bottom: 1rem;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .section-title {
        color: #00274d;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    .details-table {
        width: 100%;
        border-collapse: collapse;
    }

    .details-table th, .details-table td {
        padding: 0.75rem;
        text-align: left;
    }

    .details-table th {
        background-color: #f8f9fa;
        font-weight: bold;
        border-bottom: 2px solid #dee2e6;
    }

    .details-table tr:nth-child(even) {
        background-color: #f8f9fa;
    }

    .btn-navbar {
        background-color: #00274d;
        color: #fff;
        border: none;
        width: 100%;
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .btn-navbar:hover {
        background-color: #004080;
        color: #fff;
    }

    .button-column {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>

<div class="container mt-5">
    <!-- Trip Info -->
    <div class="card">
        <div class="card-body">
            <h2 class="section-title">Trip Info</h2>
            <table class="details-table table">
                <thead>
                    <tr>
                        <th>Info</th>
                        <th>Details</th>
                        <th>Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Trip Name</th>
                        <td>{trip.trip_name}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{trip.country_name}</td>
                        <td>
                            <a href="/countries/{encodeURIComponent(trip.country_name)}" class="btn btn-navbar btn-sm">Details</a>
                        </td>
                    </tr>
                    <tr>
                        <th>Destinations</th>
                        <td>
                            {#each tripDestinations as destination}
                                <div>{destination.name}</div>
                            {/each}
                        </td>
                        <td class="button-column">
                            {#each tripDestinations as destination}
                                <a href="/destinations/{encodeDestinationId(destination.destination_id)}" class="btn btn-navbar btn-sm">Details</a>
                            {/each}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
