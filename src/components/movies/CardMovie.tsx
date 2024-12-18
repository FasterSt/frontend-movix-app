import { Movie } from "@/models/types/movie";

type Props = {
  movieItem: Movie;
};

export default function CardMovie({ movieItem }: Props) {
  console.log(movieItem.id);
  return (
    <div className="flex flex-col relative group aspect-video w-48 h-72 cursor-pointer bg-gradient-to-b from-primary to-secondary rounded-md overflow-hidden">
      <div className="relative h-full w-full">
        <img
          src={movieItem.poster_path}
          alt={movieItem.title}
          className="h-full w-full scale-105 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex items-end opacity-0 h-full absolute bottom-0 bg-slate-950/50 w-full transition-opacity duration-500 ease-out backdrop-blur-sm group-hover:opacity-100">
        <div className="flex justify-center items-center p-2 h-1/4 w-full text-balance">
          <h2 className="text-center text-lg font-bold text-slate-200">
            {movieItem.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
// hover:scale-110 transition-transform duration-500

const styles = {
  cardContainer: "",
};
