import Link from "next/link";
import HighlightedMovie from "./HighlightedMovie";

export default function HighlightedMovieList() {
  // @TODO - use input movie list data and prepare HighlightedMovie on a display slider.
  return (
    <div className="highlighted-movie-list h-40">
      <h2>{"<Recommended / Trending / Latest Releases>"}</h2>
      <Link href={"#"}>
        <HighlightedMovie></HighlightedMovie>
      </Link>
    </div>
  );
}
