import { CinemaMoviesResponse } from '@/models/types/movie';
import CardMovie from './CardMovie';

type Props = {
    cinemaMovies: CinemaMoviesResponse;
};

// TODO: Rename to HomePage
export default function CinemaMoviesPage({ cinemaMovies }: Props) {
    const movies = cinemaMovies.results;
    return (
        <section className="flex flex-col w-full px-4">
            {' '}
            {/* TODO: Let this as a parent section */}
            <div className="w-full after:block after:content-[''] after:rounded-lg after:my-0.5 after:absolute after:h-[3px] after:bg-sky-600 after:w-36">
                {' '}
                {/* TODO: Transform this to a section component*/}
                <h1 className="text-2xl font-bold">Last Movies</h1>
            </div>
            <main className="flex flex-wrap w-full gap-4 my-8 justify-center items-center">
                {movies.map((movie) => (
                    <CardMovie key={movie.id} movieItem={movie} />
                ))}
            </main>
        </section>
    );
}
