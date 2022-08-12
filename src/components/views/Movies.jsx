import {  useState } from "react"
import { Link, useLocation } from "react-router-dom"

import {searchFilmByName} from '../shared/service/Api'
const Movies = ( ) => {
    const [query, setQuery] = useState('')
    const [item, setItem] = useState([])
    
    const { pathname } = useLocation();
    const onSubmit = (e) => {
        e.preventDefault()

        // console.log(query)
        setQuery('')

        
        const fetchPopularMovies = async () => {
            const  {results}  = await searchFilmByName(query);
    
            try {
                setItem([])
                setItem(results)
            
            } catch (error) {
            
            }
            
            };
            fetchPopularMovies()
    }

    const element = 
        item.map(({original_title, id}) => {

            return(
                
                    <li key={id}>
                        <Link to={`${pathname}/${id} `}>{original_title }</Link>
                    </li>
               
            )
        })
    
    
    const onChange = e => {
        

        setQuery(e.target.value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                value={query}
                onChange={onChange}/>
                <button 
                type="submit">search</button>
            </form>
            <br></br>
            <ul>
            {element}
            </ul>
            
        </>
    )
}

export default  Movies