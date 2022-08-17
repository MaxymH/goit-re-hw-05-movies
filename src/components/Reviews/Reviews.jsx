import { useEffect, useState } from "react"
import { getMovieReviews } from "../service/Api";
import { useParams } from "react-router-dom";
import s from './reviews.module.css'
const Views = () => {
    const [reviews, setReviews] = useState({
    items: [],
    isLoading: false,
    error: null,
    })
    const {filmID} = useParams()
    useEffect(() => {
    const cast = async () => {
        const {results}  = await getMovieReviews(filmID);
        setReviews(prevMovies => ({
            ...prevMovies,
            isLoading: true,})
        )
        try {
            setReviews(prevMovies => ({
                ...prevMovies,
                items: results,
                isLoading: false,})
            )
            
           
        
        } catch (error) {
            setReviews(prevMovies => ({
                ...prevMovies,
                error: error.message,
                isLoading: false,
            }));
        }
        
        };
       
    cast();
    }, [filmID]);

    const {items, isLoading, error} = reviews
    
    const element = !items.length ?
        <li><h2>Not Found</h2></li> :
        items.map(view => {
    return <li className={s.item} key={view.id}>
            
            <p className={s.content}>{view.content}</p>
            <h2 className={s.author}>Author: {view.author}</h2> 
        </li>
    })
    return (
        <>
        {error && <p>{error}</p>}
        {isLoading&& <p>isLoading...</p>}
        {items.length > 0 ? 
            <ul >
                {element}
                
            </ul>
            :
            <p>We not have reviews😓😓😭</p>
        }
        </>
    )
}
export default Views