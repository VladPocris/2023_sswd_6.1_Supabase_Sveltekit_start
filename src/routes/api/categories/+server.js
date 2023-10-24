import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

export async function GET({ request, cookies }) {

    const categories = await supabase
    .from('location_category')
    .select('*')
    .order('name', {ascending: true});

    if (categories.error) {
        return json({
            status: categories.status,
            error: categories.error
        });
    }

    return json({
        data: categories.data,
        status: categories.status
    });
};

// Add a new category
export async function POST({ request, cookies }) {
    // Get data from request body
    let data = await request.json();

    // Insert data
    const cat = await supabase
    .from('location_category')
    .insert([data])
    .select()


    return json({
        data: cat.data
    });
}