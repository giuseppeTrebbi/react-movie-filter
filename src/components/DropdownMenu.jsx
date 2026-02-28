import MoviesList from "./MoviesList"

export default function DropdownMenu() {
    const genres = ["Fantascienza", "Thriller", "Romantico", "Azione"]


    return (
        <>
            <div className="container mt-5">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Movie genre
                    </button>
                    <ul className="dropdown-menu">
                        {
                            genres.map((curGenre, index) => (
                                <li key={index}>{curGenre}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <MoviesList/>
        </>
    )
}