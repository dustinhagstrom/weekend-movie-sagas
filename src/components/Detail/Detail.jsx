import { useSelector } from "react-redux";

export default function Detail({ movieDetail }) {
    console.log("movie from state:", movieDetail);

    return (
        <>
            <div>
                <h3>{movieDetail.title}</h3>
                <img src={movieDetail.poster} alt={movieDetail.title} />
            </div>
        </>
    );
}
