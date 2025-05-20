import React from "react";
import Movie from "./Movie";


export default function MovieList({movies, setMovies}) {
    function deleteMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    function alphabeticalOrder() {
        const sortAlpha = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortAlpha);
    }

    function sortNumOrder() {
        const sortNum = [...movies].sort((a, b) => b.grade - a.grade);
        setMovies(sortNum);
    }


    return (
        <div>
            <button type="button" class="btn btn-primary" onClick={alphabeticalOrder}>Alfabetisk ordning</button><span> </span>
            <button type="button" class="btn btn-primary" onClick={sortNumOrder}>Betygsordning</button>

            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteMovie}/>)}
            </ul>
        </div>
    )
}

