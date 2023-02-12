import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast, IMAGE_URL } from "API/fetchMovies";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState('');
    const { movieId } = useParams();

    useEffect(() => {
        getCast(movieId)
            .then(results => setCast(results))
            .catch(error => setError(error));
    }, [movieId]);

    return (
        <>
            {cast.length === 0 ? ("There is no cast ..." ): (
                <ul>
                    {cast.map(
                        ({ id, name, profile_path, original_name, character }) => (
                            <li key={id}>
                                <img src={profile_path
                                    ? `${IMAGE_URL}${profile_path}`
                                    : `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png`
                                }
                                    alt={original_name} />
                                <h3>{name}</h3>
                                <p> Charakter: {character}</p>
                            </li>
                        )
                    )}
                </ul>
            )};
        </>
    )
}





export default Cast;