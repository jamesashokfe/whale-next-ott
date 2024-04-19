import Link from "next/link";
import MovieCard from "./MovieCard";

export default function MovieList() {
  // @TODO - use input category name and movie list data
  // and prepare MovieCard on a display grid.
  return (
    <div className="movie-list">
      <Link href={`/category/category-name`}>{"<Input Category Name>"}</Link>
      <Link href={"#"}>
        <MovieCard></MovieCard>
      </Link>
    </div>
  );
}
