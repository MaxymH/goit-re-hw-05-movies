import { searchFilmByName } from "../../service/Api";
import { useState } from "react";
import PropTypes from 'prop-types';
import MoviesList from "components/service/Component/MoviesList/MoviewsList";
const Search = ({query}) => {
    const [movies, setMovies] = useState({
        items: [],
    isLoading: false,
    error: null,
    })

    const fetchPopularMovies = async () => {
       
        const  {results}  = await searchFilmByName(query);
        setMovies(prevMovies => ({
            ...prevMovies,
            isLoading: true,
        }))
        try {
            setMovies(prevMovies => ({
                ...prevMovies,
                items: results,
                isLoading: false,
            }))
            
        
        } catch (error) {
        setMovies(prevMovies => ({
            ...prevMovies,
            error: error.message,
            isLoading: false,
        }));
        }
        
        };
        fetchPopularMovies()

    const { items , error , isLoading} = movies
  
        

        return (
            <>
            {error && <p>{error}</p>}
            {isLoading&& <p>isLoading...</p>}
            {query.length > 0?<MoviesList items={items}/> : <h2>We not have found this</h2> }
                
            </>
        )
    }

    Search.propTypes = {
        query: PropTypes.string.isRequired,
      };

export default Search