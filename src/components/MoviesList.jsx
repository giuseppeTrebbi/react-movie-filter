import { moviesList } from "../assets/data"


export default function MoviesList({ genere }) {
    const filteredList = moviesList.filter((curMovie) => (curMovie.genre === genere))


    return (
        <div className="container mt-5">
            <h3>Movies List</h3>
            <ul className="list-group">
                {
                    genere ?
                    filteredList.map((curMovie, index) => (
                        <li key={index} className="list-group-item bg-info-subtle text-info-emphasis">{curMovie.title}</li>
                    )) :
                    moviesList.map((curMovie, index) => (
                        <li key={index} className="list-group-item bg-info-subtle text-info-emphasis">{curMovie.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}