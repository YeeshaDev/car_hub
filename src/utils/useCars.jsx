import { useQuery } from 'react-query'; // Import the appropriate query library
import { fetchCars } from './supabase';

function useCarData() {
    const { data: cars, isLoading, isError } = useQuery('cars', fetchCars, {
        refetchInterval: 300000
    });

    return {
        cars,
        isLoading,
        isError
    };
}

export default useCarData;
