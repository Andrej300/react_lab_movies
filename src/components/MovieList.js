import React from 'react';
import Movie from './Movie'

const MovieList = ({movies}) => {

    // const movieNodes = movies.map(movie => {
    //     return (
    //         <Movie key={movie.id} url={movie.url} name={movie.name}>{movie.name}</Movie> 
    //     );
    // });

    return (
        <>
            for movie in movies
            {movies}
        </>
    );
}

export default MovieList;