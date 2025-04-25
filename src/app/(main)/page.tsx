import { getCinemasMovies } from '@/api/movies/api.movies';
import CinemaMoviesPage from '@/components/movies/CinemaMoviesPage';

export default async function Home() {
    const movies = await getCinemasMovies();
    if (!movies) {
        return <div>Loading...</div>;
    }
    return <CinemaMoviesPage cinemaMovies={movies} />;
}
