<script>
	/** @type {import('./$types').PageData} */

	// dependencies
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// create form instance
	const { form, errors, enhance, delayed, message, constraints, reset } = superForm(data.form);
</script>

<div class="m-5">
    <!--Show message after sucessful add location-->
      {#if $message}
          <h4 class="message" class:success={$page.status < 400} class:error={$page.status >= 400}>
              {$message}
          </h4>
      {/if}
  
      <h1>Add Location</h1>
      <!-- Bootstrap Form Layout-->
      <div class="w-75 mw-300 p-3">
          <!-- this form will post when submitted -->
          <form method="POST" use:enhance>
              <div class="mb-3">
                  <label for="category_id" class="form-label">Category</label>
                  <select name="category_id" bind:value={$form.category_id} class="form-select">
                      <option value="0">Choose a category</option>
                      <!-- Add each category to the select -->
                      {#each data.categories as cat}
                          <option value={cat.id}>{cat.name}</option>
                      {/each}
                  </select>
              </div>

              <!-- ID -->
              <div class="mb-3">
                <label for="id" class="form-label">Id</label>
                <input type="number" name="id" class="form-control" bind:value={$form.id} />
            </div>
  
              <!-- name -->
              <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" name="name" class="form-control" bind:value={$form.name} />
              </div>
  
              <!-- description -->
              <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <input type="text" name="description" class="form-control" bind:value={$form.description} />
              </div>
  
              <!-- longitude -->
              <div class="mb-3">
                  <label for="longitude" class="form-label">Longitude</label>
                  <input type="text" name="longitude" class="form-control" bind:value={$form.longitude} />
              </div>
  
              <!-- latitude -->
              <div class="mb-3">
                  <label for="latitude" class="form-label">Latitude</label>
                  <input type="text" name="latitude" class="form-control" bind:value={$form.latitude} />
              </div>

              <!-- Shared Select-->
            <div class="mb-3">
              <label for="shared" class="form-label">Shared</label>
            <select name="shared" bind:value={$form.shared} class="form-select">
                <option value="0">Choose value</option>
                <!-- Add each value to the select -->
                <option value={Boolean(1)}>Yes</option>
                <option value={Boolean(0)}>No</option>
            </select>
        </div>

        <div class="mb-3">
            <!-- Favourite Select-->
            <label for="favourite" class="form-label">Favourite</label>
            <select name="favourite" bind:value={$form.favourite} class="form-select">
                <option value="0">Choose value</option>
                <!-- Add each value to the select -->
                <option value={Boolean(1)}>Yes</option>
                <option value={Boolean(0)}>No</option>
            </select>
        </div>
              <!-- submit button -->
              <div class="mb-3">
                  <button class="btn btn-primary">Submit</button>
              </div>

          </form>
      </div>
  </div>