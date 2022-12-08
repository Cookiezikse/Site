import React, { useEffect, useState } from "react";
import axios from "axios";

function Results() {
    const [PopularList, setPopularList] = useState([]);
    const [PopularListFiltered, setPopularListFiltered] = useState([]);


    async function getData () {
        const pop = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr");
        setPopularList(pop.data.results);
        setPopularListFiltered(pop.data.results);

    }

    useEffect(() => {
        getData();
    },[]);

    function handlechange(e) {
        if (!e.target.value) {
            setPopularListFiltered(PopularList);
            return;
        }

        setPopularListFiltered(
            PopularList.filter((tv) => tv.name.includes(e.target.value))
        );
    }

    

    return (
        <div>
            <input className="SearchBar" onChange={handlechange} type='text' placeholder=" Exemple: Chainsaw Man"/>
            <div className="ShowPopTitle">
                <h2>
                    Série Populaire
                </h2>
            </div>
            <ul className="List">
                {PopularListFiltered.map((tv) =>{
                    return <li key={tv.name} ><div><img className="PosterSize" id={tv.id} src={'https://image.tmdb.org/t/p/original'+tv.poster_path} alt='Image Du Film'></img><p className="Overview">{tv.overview}</p></div><a>{tv.name}</a></li>
                })}
            </ul>
            
            
        </div>
    );
}

export default Results;
