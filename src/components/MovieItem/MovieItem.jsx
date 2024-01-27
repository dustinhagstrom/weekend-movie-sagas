export default function MovieItem({ movie }) {
    return (
        <>
            <div>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
        </>
    );
}
