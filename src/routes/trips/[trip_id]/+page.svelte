<script>
    let { data } = $props();
</script>

<h1>Trip Details</h1>

<table class="table">
    <thead>
        <tr>
            <th>Info</th>
            <th>Details</th>
            <th>Links</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Trip Name</td>
            <td>{data.trip.trip_name}</td>
            <td></td>
        </tr>
        <tr>
            <td>Country</td>
            <td>{data.trip.country_name}</td>
            <td>
                <a href={`/countries/${encodeURIComponent(data.trip.country_name)}`}>Details</a>
            </td>           
        </tr>
        <tr>
            <td>Destinations</td>
            <td colspan="2">
                <table>
                    <thead>
                        <tr>
                            <th>Destination Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.tripDestinations as destination}
                            <tr>
                                <td>{destination.name}</td>
                                <td>
                                    <a href={`/destinations/${encodeURIComponent(destination.destination_id)}`}>
                                        Details
                                    </a>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }
    th {
        background-color: #f4f4f4;
        text-align: left;
    }
    a {
        text-decoration: none;
        color: #007BFF;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
