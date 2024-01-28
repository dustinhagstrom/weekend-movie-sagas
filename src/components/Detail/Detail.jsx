import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Detail({ movieDetail }) {
    console.log("movie from state:", movieDetail);

    const history = useHistory();

    return (
        <>
            <div>
                <h3>{movieDetail.title}</h3>
                <img src={movieDetail.poster} alt={movieDetail.title} />
                <p>{movieDetail.description}</p>
                <p>{movieDetail.genre}</p>
                <button onClick={() => history.push("/")}>Back</button>
            </div>
        </>
    );
}
