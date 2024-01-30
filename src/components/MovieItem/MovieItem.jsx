import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MovieItem({ getMovieDetail, movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDetailPage = (movie) => {
        // put this movie into the detail reducer
        // dispatch({
        //     type: "ADD_MOVIE_DETAIL",
        // })
        console.log(movie.id);
        // navigate to the Detail component
        history.push(`/detail/${movie.id}`);
    };

    return (
        <>
            <div>
                <h3>{movie.title}</h3>
                <img
                    data-testid="toDetails"
                    src={movie.poster}
                    alt={movie.title}
                    onClick={() => handleDetailPage(movie)}
                />
            </div>
        </>
    );
}
