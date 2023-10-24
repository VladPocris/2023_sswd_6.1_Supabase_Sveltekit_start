/** @type {import('./$types').PageServerLoad} */
export async function load( { fetch, params }) {

    let locations;
    

    try {
        // Call fetch
        const res_locations = await fetch('/api/locations');

        // if resonse code 200 (ok)
        if (res_locations.ok) {
            // get json from resonse
            locations = await res_locations.json();
        }

    } catch(error){
            // an error occured - return status code amd mesage
        return {
            status: 500,
            error: new Error(`Could not fetch data`)
        }
    }

    return {
        locations: locations.data
    }



}