import React, { useEffect, useState } from "react";
import axios from "axios";
import App from './App'
import Navbar from './Navbar';
import {Link} from "react-router-dom";

function List() {
    const list = useState([""])
    function AddList(){

        const tmpList = [...list];
        var index = tmpList.findIndex(function (o) {
          return o.id === id;
        });
        if (index !== -1) tmpList.array(index, 1);
        console.log("ma liste après supression", tmpList);
        setList(tmpList);
        localStorage.setItem("list", JSON.stringify(tmpList))
        }

    function Movie() {
        const [MovieList, setMovieList] = useState([]);
        const [ActionList, setActionList] = useState([]);
        const [, setMovieList3] = useState([]);

    
    
        async function getData () {
            const pop = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr");
            setMovieList(pop.data.results);
            const pop2 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=30");
            setActionList(pop2.data.results);
    
        }
    
        useEffect(() => {
            getData();
        },[]);
    
        return (
            <div className="back" style={{display: 'flex'}}>

                <ul className="List2">
                    {MovieList.map((movie) =>{
                        return <li key={movie.title} ><div><img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+movie.poster_path} alt='Image Du Film'></img><p className="Overview">{movie.overview}</p></div><a>{movie.title}</a>
                                <div class="progress Overview Percent">
                                <div class="progress-value">
                                <h2 href="https://usecheck.com/" class="btn-shine" target="_blank">{movie.vote_average}/10   {movie.vote_count} Votes</h2></div>
                                </div>
                                <button onClick={AddList}>Add</button></li> 
      
                    })}

                </ul>
                
                <ul className="List2">
                    {ActionList.map((action) =>{
                        return <li key={action.name} ><div><img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+action.poster_path} alt='Image Du Film'></img><p className="Overview">{action.overview}</p></div><a>{action.name}</a>
                                <div class="progress Overview Percent">
                                <div class="progress-value">
                                <h2 href="https://usecheck.com/" class="btn-shine" target="_blank">{action.vote_average}/10   {action.vote_count} Votes</h2></div>
                                </div>
                                <button onClick={AddList}>Add</button></li> 
      
                    })}

                </ul>
    
    
    
            </div>
        )
    
    
    }
    return (
        <div>
            <Movie></Movie>
            <div className="Camoufle"></div>
        </div>
    );
    
}

export default List;