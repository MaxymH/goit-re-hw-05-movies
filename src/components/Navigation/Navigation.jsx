import { NavLink } from 'react-router-dom';

import s from "./Navigation.module.css"


const Navigation = () => (
    <nav className={s.nav}>
        <NavLink
            
            to='/'
            className={s.home}
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'blue' })}
            // activeClassName={s.activeLink}
        >Home</NavLink>

        <NavLink
            // activeClassName={s.activeLink}
            to='/movies'
            className={s.home}
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'blue' })}
        >Movies</NavLink>
    </nav>
)

export default Navigation