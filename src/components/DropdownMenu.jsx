import { useState } from "react"
import MoviesList from "./MoviesList"

export default function DropdownMenu() {
    const genres = ["Fantascienza", "Thriller", "Romantico", "Azione"]
    const [genere, setGenere] = useState(null)


    return (
        <>
            <div className="container mt-5">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle text-bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Movie genre
                    </button>
                    <ul className="dropdown-menu">
                        {
                            genres.map((curGenre, index) => (
                                <li key={index}>
                                    <button onClick={() => (setGenere(curGenre))} class="dropdown-item" type="button">
                                        {curGenre}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <MoviesList genere={genere}/>
        </>
    )
}