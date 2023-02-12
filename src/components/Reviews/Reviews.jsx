import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "API/fetchMovies";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getReviews(movieId)
            .then(results => setReviews(results))
    }, [movieId]);
    
    return (
        <>
            {reviews.length === 0 ? (
                <p> There is no reviews</p>
            ) : (
                <div>
                    <ul>
                        {reviews.map(({ id, author, created_at, content }) => (
                            <li key={id}>
                                <h2>{author}</h2>
                                <p>{created_at}</p>
                                <p>{content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )};
        </>
    );
};

export default Reviews;