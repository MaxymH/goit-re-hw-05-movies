import MoviesList from "components/service/Component/MoviesList/MoviewsList";
import { useEffect, useState } from "react";
import { popularMovies } from "../service/Api";

 const PopularFilm = () => {
    const [movies, setMovies] = useState({
        items: [],
        isLoading: false,
        error: null,
    });


    useEffect(() => {
    const fetchPopularMovies = async () => {
        setMovies(prevMovies => ({ ...prevMovies, isLoading: true }));
        const { results } = await popularMovies();
        try {
            setMovies( prevMovies => ({
                ...prevMovies,
                items: results,
                isLoading: false,
            }) )
        } catch (error) {
            setMovies(prevMovies => ({
                ...prevMovies,
                error: error.message,
                isLoading: false,
            }));
        }  };
    fetchPopularMovies();
    }, []);
    
    
    const { items, isLoading, error} = movies

    return (
        <>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <MoviesList items={items}/>
        </>
        
    )
}

export default PopularFilm