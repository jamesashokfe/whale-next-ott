import type { Metadata } from "next";
import HighlightedMovieList from "@components/HighlightedMovieList";
import MovieList from "@components/MovieList";

type Props = {
  params: { name: string };
};

async function getCategory(name: string) {
  // @TODO
  // Revalidate/refresh category data once per day.
  // const res = await fetch(`<api-url>/${name}`, { next: { revalidate: 86400 } });
  // return await res.json();

  return {
    title: "Comedy",
    description: "Hilarious movies of the last decade",
  };
}

// Generate page metadata. Handle SEO.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = params;
  const category = await getCategory(name);

  return {
    title: `${category.title} | Whalepop Streaming`,
    description: category.description,
  };
}

export default async function Page({ params }: Props) {
  const { name } = params;
  const category = await getCategory(name);

  return (
    <main className="flex flex-col grow container">
      {/* Category trending movie list */}
      <HighlightedMovieList></HighlightedMovieList>
      {/* Category movie list */}
      <MovieList></MovieList>
    </main>
  );
}
