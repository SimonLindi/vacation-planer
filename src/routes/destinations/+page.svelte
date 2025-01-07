<script>
    let { data } = $props();
  </script>
  
  <div class="container mt-5">
    <h1 class="mb-4">All Destinations</h1>
    
    <table class="table table-bordered table-hover">
      <thead class="table-light">
        <tr>
          <th>Destination Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {#each data.destinations as destination}
          <tr>
            <td>{destination.name}</td>
            <td>
                <a href="/destinations/{encodeURIComponent(destination.destination_id)}" class="btn btn-primary btn-sm">View Details</a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  