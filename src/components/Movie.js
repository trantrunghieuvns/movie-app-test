import React from 'react';
import App from '../App';
const IMG_API = 'https://image.tmdb.org/t/p/w500';

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className='movie'>
        <div className="opa">
        <img src = { IMG_API + poster_path } alt='title '/>
        </div>

        <div className='movie-info'>
            <h3>{title}</h3>
            <span>Rating: {vote_average}</span>
        </div>

        <div className='movie-overview'>
            <h2>Overview</h2>
            <p>{overview}</p>
            <button className ='watchNow'>Watch Now</button>
        </div>
    </div>

)

export default Movie;

//***Movie detail***
