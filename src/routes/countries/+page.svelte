<script>
    export let data;
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
        text-align: center; /* Titel mittig */
    }

    .details-table {
        width: 80%; /* Tabelle schmaler */
        margin: 0 auto; /* Tabelle zentrieren */
        border-collapse: collapse;
        border: 1px solid #dee2e6; /* Rahmen um die Tabelle */
    }

    .details-table th, .details-table td {
        padding: 0.75rem;
        text-align: left; /* Text linksbündig */
        border: 1px solid #dee2e6; /* Rahmen für Zellen */
    }

    .details-table th {
        background-color: #00274d;
        color: white;
        font-weight: bold;
    }

    .btn-primary {
        background-color: #00274d;
        color: white;
        border: none;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        font-size: 0.9rem;
        text-transform: none; /* Keine Großschreibung */
        transition: background-color 0.3s;
        margin-left: auto; /* Rechtsbündig für Buttons */
        display: block; /* Block für bessere Positionierung */
    }

    .btn-primary:hover {
        background-color: #001d3b;
    }
</style>

<div class="container mt-5">
    <div class="card">
        <div class="card-body">
            <h2 class="section-title">All Countries</h2>
            <table class="details-table table">
                <thead>
                    <tr>
                        <th>Country Name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {#each data.countries as country}
                        <tr>
                            <td>{country.country_name}</td>
                            <td>
                                <a href="/countries/{country.country_name}" class="btn btn-primary">View Destinations</a>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
