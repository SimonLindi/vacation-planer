<script>
    let { data } = $props();
  </script>
  
  <div class="container mt-5">
    {#if data.destination}
      <h1 class="mb-4">{data.destination.name}</h1>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th>Description</th>
            <td>{data.destination.description}</td>
          </tr>
          <tr>
            <th>Coordinates</th>
            <td>{data.destination.coordinates}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{data.destination.country_id}</td>
          </tr>
          <tr>
            <th>Destination ID</th>
            <td>{data.destination.destination_id}</td>
          </tr>
        </tbody>
      </table>
    {:else}
      <p>Destination not found.</p>
    {/if}
  </div>
  