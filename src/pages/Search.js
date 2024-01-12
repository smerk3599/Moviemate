import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main className="p-5">
      <section className="flex">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No results found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
