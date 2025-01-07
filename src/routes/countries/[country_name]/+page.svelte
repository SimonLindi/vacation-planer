<script>
    export let data;
</script>

<h1>Destinations in {data.countryName}</h1>

<table>
    <thead>
        <tr>
            <th>Destination Name</th>
            <th>Description</th>
            <th>Coordinates</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        {#each data.destinations as destination}
        <tr>
            <td>{destination.name}</td>
            <td>{destination.description}</td>
            <td>{destination.coordinates}</td>
            <td><a href={`/destinations/${encodeURIComponent(destination.destination_id)}`}>Details</a></td>
        </tr>
        {/each}
    </tbody>
</table>
