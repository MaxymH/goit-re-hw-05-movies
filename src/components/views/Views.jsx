import { useEffect, useState } from "react"
import { getMovieReviews } from "components/shared/service/Api";
import { useParams } from "react-router-dom";
const Views = () => {
    const [views, setViews] = useState([])
    const {filmID} = useParams()
    useEffect(() => {
    const cast = async () => {
        const {results}  = await getMovieReviews(filmID);

        try {
            setViews(results)
            
           
        
        } catch (error) {
        
        }
        
        };
       
    cast();
    }, [filmID]);
    const element = !views.length ?
        <li><h2>Not Found</h2></li> :
        views.map(view => (
        <li key={view.id}>
            <h2>{view.author}</h2> 
            <p>{view.content}</p>
        </li>
    ))
    return (
        <>
            <ul>
                {element}
                
            </ul>
        </>
    )
}
export default Views