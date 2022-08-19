import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../service/Api";
import s from './cast.module.css';


const Author = () => {
    const [cast, setCast] = useState({
        items: [],
        isLoading: false,
        error: null,
    })

    
    const {filmID} = useParams();


    useEffect(() => {
    const cast = async () => {
        setCast(prevMovies => ({
            ...prevMovies,
            isLoading: true
        }))

        const {cast}  = await getMovieCredits(filmID);
        try {
            setCast(prevMovies => ({
                ...prevMovies,
                items: cast,
                isLoading: false
            }))
        } catch (error) {
            setCast(prevMovies => ({
                ...prevMovies,
                error: error.message,
                isLoading: false,
            }));
        }
        
        };
    cast();
    }, [filmID]);
    

    const {items, isLoading , error} = cast
    const element = items.map(author => {
        const photo = author.profile_path ?
            `https://image.tmdb.org/t/p/w500${author.profile_path}` :
            'https://upload.wikimedia.org/wikipedia/commons/9/9c/Volodymyr_Zelensky_Official_portrait.jpg'
        return (
        <li className={s.item} key={author.id}>
                <h2 className={s.name}>{author.name}</h2>
                <img className={s.img} src={photo} alt={author.name} width='100'/>
        </li>
    )})
    

    return (
        <>  
            <ul className={s.list}>
                {element}
            </ul>
            {error && <p>{error}</p>}
            {isLoading&& <p>isLoading...</p>}
        </>
    )
}

export default Author