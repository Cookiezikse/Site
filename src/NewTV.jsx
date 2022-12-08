import React, {useState, useEffect} from "react";
import axios from "axios";

function NewTV() {
    const [LatTvList, setLatTvList] = useState([]);

    async function getData () {
        const lattv = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=30");
        setLatTvList(lattv.data.results);

    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div className="back">
            <div className="ShowPopTitle">
                <h2>
                    Nouveauté
                </h2>
            </div>
            <ul className="List">
                {LatTvList.map((tv) => {
                    return <li key={tv.name}><div><img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+tv.poster_path} alt='Image Du Film'></img><p className="Overview">{tv.overview}</p></div><a>{tv.name}</a>
                    <div class="progress Overview Percent">
                        <div class="progress-value">
                            <h2 href="https://usecheck.com/" class="btn-shine" target="_blank">{tv.vote_average}/10 {tv.vote_count} Votes</h2>
                        </div>
                    </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default NewTV;