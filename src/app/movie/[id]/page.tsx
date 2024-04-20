import type { Metadata } from "next";
import HighlightedMovie from "@components/HighlightedMovie";
import MovieList from "@components/MovieList";

type Props = {
  params: { id: string };
};

async function getMovie(id: string) {
  // @TODO
  // const res = await fetch(`<api-url>/${id}`);
  // return await res.json();

  return {
    title: "Soodhu Kavvum",
    description:
      "Soodhu Kavvum (2013) Tamil Dark Comedy movie directed by Nalan Kumarasamy.",
  };
}

// Generate page metadata. Handle SEO.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const movie = await getMovie(id);

  return {
    title: `${movie.title} | Whalepop Streaming`,
    description: movie.description,
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;
  const movie = await getMovie(id);

  return (
    <main className="flex flex-col grow container">
      {/* Current movie highlighted */}
      <HighlightedMovie></HighlightedMovie>

      {/* Input: 'Recommended / Also watch' movie list */}
      <MovieList></MovieList>
    </main>
  );
}
