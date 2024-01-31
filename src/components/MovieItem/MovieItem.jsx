import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDetailPage = () => {
                dispatch({
            type: "GET_CURRENT_MOVIE_GENRES",
            payload: {id: movie.id},
        })
        // navigate to the Detail component
        // send id data of this movie as a url param
        history.push(`/detail/${movie.id}`);
    };

    return (
            <div data-testid="movieItem">
                <h3>{movie.title}</h3>
                <img
                    data-testid="toDetails"
                    src={movie.poster}
                    alt={movie.title}
                    onClick={handleDetailPage}
                />
            </div>
    );
}
