import React, { useEffect, useState } from "react";
import axios from "axios";
import List from './List';

function Movie() {
    const [MovieList, setMovieList] = useState([]);


    async function getData () {
        const pop = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr");
        setMovieList(pop.data.results);

    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div className="back" style={{display: 'flex'}}>
            <div className="MoviePopTitle">
                <h2>
                    Film Populaire
                </h2>
            </div>
            <ul className="List">
                {MovieList.map((movie) =>{
                    return <li key={movie.title} ><div><img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+movie.poster_path} alt='Image Du Film'></img><p className="Overview">{movie.overview}</p></div><a>{movie.title}</a>
                            <div class="progress Overview Percent">
                            <div class="progress-value">
                            <h2 href="https://usecheck.com/" class="btn-shine" target="_blank">{movie.vote_average}/10   {movie.vote_count} Votes</h2></div>
                            </div></li>       
                })}
            </ul>


        </div>
    )


}

export default Movie;