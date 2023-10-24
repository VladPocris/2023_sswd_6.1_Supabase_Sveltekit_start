/** @type {import('./$types').PageServerLoad} */
export async function load( { fetch, params }) {

    let locations;
    let loc_id;

    try {
        // Call fetch
        const res_locations = await fetch('/api/locations');

        // if resonse code 200 (ok)
        if (res_locations.ok) {
            // get json from resonse
            locations = await res_locations.json();
        }

        const res_loc_id = await fetch('/api/ID');

        // if resonse code 200 (ok)
        if (res_loc_id.ok) {
            // get json from resonse
            loc_id = await res_loc_id.json();
        }
    } catch(error){
            // an error occured - return status code amd mesage
        return {
            status: 500,
            error: new Error(`Could not fetch data`)
        }
    }

    return {
        locations: locations.data,
        locID: loc_id.data
    }



}