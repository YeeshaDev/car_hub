import {createClient} from '@supabase/supabase-js'
import axios from 'axios';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const fetchCars = async () => {
const supabase = createClient(supabaseUrl, supabaseKey);
 try {
 const {data,error} = await supabase
 .from('carhub').select('*').order('id');
 if (error) {
    throw error;
  }
  return data;
} catch (error) {
  console.error('Error fetching cars:', error);
  return null;
}
}

export const fetchBlog = async () => {
  const response = await axios.get('https://example-data.draftbit.com/cars?_limit=10');
  return response.data;
};
