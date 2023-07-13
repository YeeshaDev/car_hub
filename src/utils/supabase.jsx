import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://hiluplpwdqlhvpdkvefm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbHVwbHB3ZHFsaHZwZGt2ZWZtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODgwNjY3MywiZXhwIjoyMDA0MzgyNjczfQ.GwUXy6g1_SI_s8IYmJPATDoN5zocx9yjFG5NCh6UBZI';

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
