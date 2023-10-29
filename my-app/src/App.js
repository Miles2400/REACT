import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// 8fbdd6cc

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8fbdd6cc';
const movie1 =
{
	"Title": "Red Notice",
	"Year": "2021",
	"imdbID": "tt7991608",
	"Type": "movie",
	"Poster": "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
};

const App = () => {

	const [movies, setMovie] = useState([]);
	const [searchTerm, setSearchTerm] = useState('')

	const searchMovie = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		setMovie(data.Search);
	};

	useEffect(() => {
		searchMovie('Avengers');
	}, [])

	return (
		<div className='app'>
			<h1>MovieLands</h1>

			<div className='search'>
				<input
					placeholder='Search for Movies'
					value={searchTerm}
					onChange={(e) =>  setSearchTerm(e.target.value)}
				/>
				<img
					src={SearchIcon}
					alt='search'
					onClick={() => searchMovie(searchTerm)}
				/>
			</div>
			{
				movies?.length > 0
					? (
						<div className='container' >
							{movies.map((movie) => (
								<MovieCard movie={movie} />
							))}
						</div>
					) : (
						<div className='empty'>
							<h1>No movies found</h1>
						</div>
					)
			}
		</div>
	);
};

export default App;
