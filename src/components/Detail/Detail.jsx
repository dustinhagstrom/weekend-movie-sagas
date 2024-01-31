import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

export default function Detail() {
    const movies = useSelector((state) => state.movies);
    const genres = useSelector((state) => state.genres);
    const currentMovieGenres = useSelector((state) => state.currentMovieGenres);
    const history = useHistory();
    const { id } = useParams();

    const foundMovie = movies.find((movie) => {
        if (movie.id == id) {
            return movie;
        }
    })

    // console.log("movies:", movies);
    // console.log("genres:", genres);
    // console.log("currentMovieGenres:", currentMovieGenres);
    // console.log("foundMovie:", foundMovie);

    return (
        <>
            <section data-testid="movieDetails">
                <h2>{foundMovie?.title}</h2>
                <img src={foundMovie?.poster} alt={"movie image"} />
                <p>{foundMovie?.description}</p>
                {currentMovieGenres.map((genreObj, i) => {
                    return <div key={i}>{genreObj.name}</div>
                })}
                <button data-testid="toList" onClick={() => history.push("/")}>Back</button>
            </section>
        </>
    );
}
