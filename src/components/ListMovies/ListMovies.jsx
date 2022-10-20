import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './ListMovies.module.css'
export const ListMovies = ({ movies, path = '' }) => {
    const location = useLocation()

    return (
        <ul className={css.list}>
            {movies.map(({ id, title, poster_path }) => (
                <Link key={id} to={`${path}${id}`} state={{ from: location }}>
                    <li className={css.item}>
                       <img  className={css.poster} src={
                        poster_path
                            ? 'https://image.tmdb.org/t/p/w300' + poster_path
                            : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                    } alt={title} /> 
                       {!poster_path && <p className={css.noImgTitle}>{title}</p>}   
                  </li>
               </Link>
            ))}
        </ul>
    )
}
ListMovies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    path: PropTypes.string,
}