import { Suspense } from "react"
import { Outlet, NavLink } from "react-router-dom"
import css from './Layout.module.css';

export const Layout = () => {
    return (
        <>
            <header className={css.header}>
                <nav>
                    <NavLink className={css.link} to='/' end>Home</NavLink> 
                    <NavLink className={css.link} to='/movies' end>Movies</NavLink>  
                </nav>
            </header>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </>
    )
}