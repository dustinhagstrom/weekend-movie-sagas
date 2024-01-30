import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

export default function Detail() {
    const movies = useSelector((state) => state.movies);

    const { id } = useParams();
    const history = useHistory();
    // console.log("id of clicked movie:", id);

    const thisMovieObj = movies.find((movie) => {
        // console.log("movie ids:", movie.id);
        // check for equality, type indifferent
        if (movie.id == id) {
            return movie;
        }
    });
    console.log("this movie obj:", thisMovieObj);

    return (
        <>
            <div>
                <h3>Movie title</h3>
                <img src="" alt={"movie image"} />
                <p>description</p>
                <p>genre</p>
                <button onClick={() => history.push("/")}>Back</button>
            </div>
        </>
    );
}
