import React, {useState, useEffect} from 'react';
import Movie from './Movie';

const API_KEY = 'eb3017d728f7ae5e3cec77e77f7e0ffc';
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=eb3017d728f7ae5e3cec77e77f7e0ffc&query=";

function Fetch() {
  const [movies, setMovies] = useState([]);   
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => { 
        console.log(data);
        setMovies(data.results);
      })
  }, []);

  const handleOnsubmit = (e) => {
          e.preventDefault();

          fetch(`${SEARCH_API}${searchTerm}`)
          .then(res => res.json())
          .then(data => {
              setMovies(data.results);
              });
      }

  const handleOnChange = (e) => {
          setSearchTerm(e.target.value);
          
      }

  return (
    <>
    <header>
      <div className='logo'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hulu_logo_2017.svg/799px-Hulu_logo_2017.svg.png' alt='logo'/>
      </div>
    
      <form onSubmit={handleOnsubmit}>
          <div className = 'search-tool'>
              <input className = "search" type="text" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>
              <button className = "searchButton">Search</button>
          </div>    
      </form>
    </header>

        <div className = 'movie-container'>{
          movies?.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>;
    </>    
  )
}

export default Fetch;

