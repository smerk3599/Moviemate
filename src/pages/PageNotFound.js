import { Link } from "react-router-dom";
import NoPage from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey-700 font-bold my-10 dark:text-white">
            404 Page Not Found
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={NoPage} alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via blue-700 to-blue-900 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">
              Back to MovieMate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
