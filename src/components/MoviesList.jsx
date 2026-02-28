import { moviesList } from "../assets/data"


export default function MoviesList() {
    return (
        <div className="container mt-5">
            <ul className="list-group">
                {
                    moviesList.map((curMovie, index) => (
                        <li key={index} className="list-group-item">{curMovie.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}