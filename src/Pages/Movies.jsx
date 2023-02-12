import { useEffect, useState } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import { searchMovies } from "API/fetchMovies";

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const location = useLocation();

    const handleSubmit = e => {
        e.preventDefault();
        const input = e.currentTarget;
        setSearchParams(query !== "" ? { query: input.elements.query.value } : {});
        input.reset();
    };

    useEffect(() => {
        searchMovies()
            .then(results => setMovies([...results]))
            .catch(error => setError(error.mesage))
    }, [query]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" autoComplete="off" placeholder="Search movie" />
                <button type="submit">
                    Search
                </button>
            </form>

            <ul>
                {movies &&
                    movies.map(({ id, title }) => (
                        <li key={id}>
                            <Link
                                to={`/movies/${id}`}
                                state={{ location }}>
                                <p>{title}</p>
                            </Link>
                        </li>
                    ))}
            </ul>
            {error && <p> Something went wrong, please try again.</p>}
        </>
    );
};

export default Movies;