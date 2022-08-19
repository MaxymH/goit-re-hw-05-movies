import { getMovieInfo } from "./../service/Api"
import { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import s from './detailFilm.module.css'

export default function Detail() {
    const [ film , setFilm] = useState({
        items: [],
        isLoading: false,
        error: null,
    })


    const { filmID } = useParams()


    const location = useLocation();
    const from = location?.state?.from || '/'

    let navigate = useNavigate();
    const handleClick = () => {
        navigate(from)
    }


    useEffect(() => {
    const fetchDetailFilm = async () => {
        const results  = await getMovieInfo(filmID);
        setFilm(prevFilm => ({
            ...prevFilm,
            isLoading: true,
        }))
        try {
            setFilm(prevFilm => ({
                ...prevFilm,
                items: results,
                isLoading: false,
            }))
        } catch (error) {
            setFilm(prevFilm => ({
                ...prevFilm,
                error: error.message,
                isLoading: false,
            }))
        }
        };
    fetchDetailFilm();
    }, [filmID]);
    

    const {items, isLoading, error}=film
    const {original_title , poster_path, release_date,overview} = items


    const image = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Volodymyr_Zelensky_Official_portrait.jpg';


    return (
        <>
        <div className={s.container}>
        
        <button className={s.back} onClick={handleClick}>Go back</button>
            <hr />
            <h2 className={s.title}>{original_title}</h2>
            <img className={s.img} src={image} alt={original_title}/>
            <ul className={s.list}>
                <li><p className={s.overview}>{overview}</p></li>
                <li><p className={s.date}>{release_date}</p></li>
            </ul>
            </div>
            
            <hr />
            <ul className={s.listLink}>
                <li>
                    <NavLink
                    state={{ from }}
                    to={`/movies/${filmID}/cast`}
                    className={s.link}
                    >Cast</NavLink>
                </li>
                <li>
                    <NavLink 
                    className={s.link}
                    state={{ from }}
                    to={`/movies/${filmID}/reviews`}
                    >Reviews</NavLink>
                </li>
            </ul>
            <Outlet/>
            {error && <p>{error}</p>}
            {isLoading&& <p>isLoading...</p>}
            </>
    )
}

/*sdfsdfsdf*/