import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";
import { getMovie } from "../../../../components/movie-info";

interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
