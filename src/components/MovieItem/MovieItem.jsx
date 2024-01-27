import { useHistory } from "react-router-dom";

export default function MovieItem({ getMovieDetail, movie }) {
    const history = useHistory();

    const handleDetailPage = (movie) => {
        // put this movie into the detail reducer
        getMovieDetail(movie);

        // navigate to the Detail component
        history.push("/detail");
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
