<script>
    let { data } = $props();
    let trips = $state(data.trips);
</script>

<h1>Alle Trips</h1>
<table class="table">
    <thead>
        <tr>
            <th>TripsId</th>
            <th>Tripname</th>
            <th>Countryname</th>
            <th>Destinations</th>
        </tr>
    </thead>
    <tbody>
        {#each trips as trip}
            <tr>
                <td>
                    <a href={"/trips/" + trip.trip_id}>trip details</a>
                </td>
                <td>
                    <h1>{trip.trip_name}</h1>
                </td>
                <td>
                    <h1>{trip.country_name}</h1>
                </td>
                <td>
                    <h1>{trip.destination_list}</h1>
                </td>
            </tr>            
        {/each}
    </tbody>
</table>