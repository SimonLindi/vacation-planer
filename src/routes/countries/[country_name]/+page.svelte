<script>
    export let data;
    const { destinations, country_name } = data;
</script>

<style>
    .container {
        margin-top: 2rem;
    }

    .table-container {
        background-color: #f8f9fa;
        border-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }

    .table {
        width: 100%;
        border-collapse: collapse;
    }

    .table th, .table td {
        text-align: left;
        padding: 1rem;
        border-bottom: 1px solid #dee2e6;
    }

    .table th {
        background-color: #00274d;
        color: #ffffff;
        font-weight: bold;
    }

    .table tr:nth-child(even) {
        background-color: #f1f1f1;
    }

    .details-button {
        background-color: #00274d;
        color: #ffffff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        text-decoration: none;
        text-align: center;
        display: inline-block;
    }

    .details-button:hover {
        background-color: #004080;
    }
</style>

<div class="container">
    <div class="table-container">
        <h2 class="text-center" style="color: #00274d;">Destinations in {country_name}</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Destination Name</th>
                    <th>Description</th>
                    <th>Coordinates</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {#each destinations as destination}
                    <tr>
                        <td>{destination.name}</td>
                        <td>{destination.description}</td>
                        <td>{destination.coordinates}</td>
                        <td>
                            <a href="/destinations/{encodeURIComponent(destination.destination_id)}" class="details-button">Details</a>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
