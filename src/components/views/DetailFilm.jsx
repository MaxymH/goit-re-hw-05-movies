import { getMovieInfo } from "components/shared/service/Api"
import { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom"


export default function Detail() {
    const [name, setName]= useState('')
    const { filmID } = useParams()
    const { pathname } = useLocation();
    useEffect(() => {
    const fetchPopularMovies = async () => {
        const {original_title}  = await getMovieInfo(filmID);

        try {
            setName(original_title)
           
        
        } catch (error) {
        
        }
        
        };
       
    fetchPopularMovies();
    }, [filmID]);
    
    return (
        <>
            <h2>{name}{filmID}</h2>

            <hr />
            <ul>
                <li>
                    <NavLink
            to={`${pathname}/authors`}
            >Author</NavLink>
                </li>
                <li>
            <NavLink 
                to={`${pathname}/views`}>
                Views
            </NavLink>
                </li>
            </ul>
            
            
            <Outlet/>
        </>
    )
}