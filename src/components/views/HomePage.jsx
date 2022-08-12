import { useEffect, useState } from "react";
import { Link ,useLocation} from "react-router-dom";
import { popularMovies } from "../shared/service/Api";

const Home = () => {
    const [movies, setMovies] = useState([])
    const { pathname } = useLocation();
    useEffect(() => {
    const fetchPopularMovies = async () => {
        const { results } = await popularMovies();

        try {
            setMovies( results )
        
        } catch (error) {
        
        }
        
        };
       
    fetchPopularMovies();
    }, []);
    
    
    const element =  movies.map(movie => (
                     <li key={movie.id}>
                        <Link to={`movies${pathname}${movie.id} `}>{movie.title }</Link>
                    </li> 
                )
                
    )
    
    return (
        <>
            <ul>
                {element}
            </ul>
            
            
        </>
        
    )
}

export default Home