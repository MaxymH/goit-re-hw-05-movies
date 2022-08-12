import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "components/shared/service/Api";

const Author = () => {
    const [authors, setAuthors] = useState([])
    const {filmID} = useParams();

    useEffect(() => {
    const cast = async () => {
        const {cast}  = await getMovieCredits(filmID);

        try {
            setAuthors(cast)
            
           
        
        } catch (error) {
        
        }
        
        };
       
    cast();
    }, [filmID]);
    
    const element = authors.map(author => {
        const photo = author.profile_path ?
            `https://image.tmdb.org/t/p/w500${author.profile_path}` :
            'https://upload.wikimedia.org/wikipedia/commons/9/9c/Volodymyr_Zelensky_Official_portrait.jpg'
        return (
        <li key={author.id}>
                <h2>{author.name}</h2>
                <img src={photo} alt={author.name} width='100'/>
        </li>
    )})
    
    return (
        <>
            <h2>Author </h2>
            <ul>
                {element}

            </ul>
            
        </>
    )
}

export default Author