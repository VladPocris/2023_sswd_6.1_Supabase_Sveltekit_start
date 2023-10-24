import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Get locations for a category by category_id
export async function GET({ params, request, cookies }) {

    let id = 0;
    if (params.id && !isNaN(parseInt(params.id))) {
        id = parseInt(params.id)
    }

    if (id > 0) {

        const locations = await supabase
        .from('locations')
        .select('*')
        .eq('id', id);

        if (locations.error) {
            return json({
                status: locations.status,
                error: locations.error
            });
        }

        return json({
            data: locations.data,
            status: locations.status
        });

    }
    return json({
        status: 400,
        error: 'Bad Request'
    });
}