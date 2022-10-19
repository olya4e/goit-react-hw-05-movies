import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export const ListMovies = ({ movies, path = '' }) => {
    const location = useLocation()

    return (
        <ul>
           { movies.map(({id, title})=>(
               <li key={id}>
                   <Link to={`${path}${id}`} state={{ from: location }}>{title}</Link>
            </li>
            ))}
        </ul>
    )
}
ListMovies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    path: PropTypes.string,
}