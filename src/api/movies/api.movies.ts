import { fetcher } from '@/configs/configApi';
import { NEXT_PUBLIC_BACKEND_URL } from '../../../config';
import { CinemaMoviesResponse } from '@/models/types/movie';

export const getCinemasMovies = async (): Promise<CinemaMoviesResponse> => {
    console.log('URL', `${NEXT_PUBLIC_BACKEND_URL}/api/movies`);
    const { data } = await fetcher<{ data: CinemaMoviesResponse }>(
        `${NEXT_PUBLIC_BACKEND_URL}/api/movies`,
    );
    return data;
};
