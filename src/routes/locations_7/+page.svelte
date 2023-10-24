<script>
	export let data;

	let locations = data.locations;

	/**
	 * @param id {number}
	 */
	async function filterById(id) {
		let endpoint = '/api/locations/';

		if (id != 0) {
			endpoint = `${endpoint}ID/${id}`;
		}

		console.log('api endpoint: ', endpoint);

		// Call fetch
		const response = await fetch(endpoint);

		// if resonse code 200 (ok)
		if (response.ok) {
			// get json from resonse
			const json = await response.json();
			locations = json.data;
		}
	}
</script>

<!-- The HTML content of the page-->

<div class="container">
	<div class="row">
		<!-- Page Header -->
		<h2 class="mt-5">Locations from Supabase</h2>
	</div>
	{#if locations}
		<div class="row">
			<div class="col-sm-2">
				<!-- Page Body Left Column (menu) -->
				<div id="id" class="list-group">
					<button on:click={() => filterById(0)} class="list-group-item list-group-item-action">
						All Locations ID
					</button>
					{#each locations as loc}
						<button
							on:click={() => filterById(Number(loc.id))}
							class="list-group-item list-group-item-action"
						>
							{loc.id}
						</button>
					{/each}
				</div>
			</div>
			<!-- End category col -->

			<div class="col-sm-10">
				<!-- Page Body Right Side (Content goes here) -->
				<div id="locations">
					<table class="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>description</th>
								<th>Location (lat, long)</th>
							</tr>
						</thead>
						<tbody>
							{#each locations as loc}
								<tr>
									<td>{loc.id}</td>
									<td>{loc.name}</td>
									<td>{loc.description}</td>
									<td
										><a
											href="https://www.openstreetmap.org/search?query={loc.latitude}%2C{loc.longitude}#map=17/{loc.latitude}/{loc.longitude}"
											target="_blank">{loc.latitude}, {loc.longitude}</a
										></td
									>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<!-- End locations col -->
		</div>
		<!-- End Row -->
	{:else}
		<p>No data to display</p>
	{/if}
	<p><a href="/add_location">Add new location</a></p>
	<p><a href="/add_category">Add new category</a></p>
</div>
<!-- End Main Content-->
