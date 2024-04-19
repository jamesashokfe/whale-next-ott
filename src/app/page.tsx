import HighlightedMovieList from "@components/HighlightedMovieList";
import MovieList from "@components/MovieList";

export default function Home() {
  // @TODO - fetch data and prepare HighlightedMovieList and MovieList components.
  return (
    <main className="flex flex-col grow container">
      <HighlightedMovieList></HighlightedMovieList>
      <MovieList></MovieList>
    </main>
  );
}
