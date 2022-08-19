import {  useState } from "react"
import {useNavigate,useLocation } from "react-router-dom"
import Search from "./Search"
import s from './search.module.css'

const SearchFilm = () => {
    const [query, setQuery] = useState('')


    let navigate = useNavigate();
    const location = useLocation()


    const onSubmit = (e) => { 
        e.preventDefault()
        setQuery('')
        if (query === '') {
        return
        }
        navigate({...location,
        search: `query=${query}`})
    }

    
    const onChange = e => {
        setQuery(e.target.value)
    }


    const  getQuery = new URLSearchParams(location.search).get('query')

    
    return (
        <div className={s.container}>
            <form
            onSubmit={onSubmit}>
                <input 
                className={s.input}
                value={query}
                onChange={onChange}/>
                <button 
                className={s.button}
                type="submit">search</button>
            </form>
            {getQuery?<Search query={new URLSearchParams(location.search).get('query')}/> : <h2>Enter name</h2>}
            </div>
    )
}
export default SearchFilm