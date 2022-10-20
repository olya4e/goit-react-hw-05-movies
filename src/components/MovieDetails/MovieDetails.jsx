import { Link } from 'react-router-dom'
import {IMG_URL} from 'constants/constants';
import css from 'components/MovieDetails/MovieDetails.module.css';
export const MovieInfo = ({ details, location }) => {
    
    const  { poster_path, title, release_date, vote_average, overview, genres } =
        details
    return (
        <div>
            <div className={css.wrapper}>
                <img src={`${IMG_URL}${poster_path}`} alt={title} width='300' />
                    <div className={css.movieInfo}>
                            <h2>
                    {title} ({release_date.slice(0, 4)})
                    </h2>
                    <p>Vote: {vote_average.toFixed(1)}</p>
                    <h3>Overview:</h3>
                    <p> {overview}</p>
                    <h3>Genres</h3>{
                        <p>
                            {genres.map(({name})=>name).join(', ')}
                        </p>
                    }
                </div>
            </div>
            <div className={css.addinfo}>
                <h3>Additional information</h3>
            <ul>
                <li className={css.infoItem}>
                    <Link to='cast' state={location}>Cast</Link>
                </li>
                <li className={css.infoItem}>
                     <Link to='reviews' state={location}>Reviews</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}