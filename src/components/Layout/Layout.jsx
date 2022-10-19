import { Suspense } from "react"
import { Outlet, NavLink } from "react-router-dom"
import { ImHome, ImFilm } from "react-icons/im";
import css from './Layout.module.css';

export const Layout = () => {
    return (
        <>
            <header className={css.header}>
                <nav>
                    <NavLink className={css.link} to='/' end><ImHome className={css.icon}/> Home</NavLink> 
                    <NavLink className={css.link} to='/movies' end><ImFilm className={css.icon}/> Movies</NavLink>  
                </nav>
            </header>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </>
    )
}