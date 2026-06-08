import React, { useEffect } from "react";
import MovieTab from "../MovieTab/MovieTab"
import MovieCard from "../MovieCard/MovieCard"
import { Grid } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import "./Movies.css";


function Movies() {
    const [movies, setMovies] = React.useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch("https://api.tvmaze.com/shows");
            const data = await response.json();
            setMovies(data);
        };
        fetchMovies();
    }, []);
    return (
        <div className="moviesSection">
            <div className="moviesHeader">
                <h3>Movies</h3>
            </div>
            {movies.length > 0 ? (
                <MovieTab data={movies} />
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <CircularProgress sx={{ color: 'var(--color-primary)' }} />
                </div>
            )}
        </div>
    );
}

export default Movies;