import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import {useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { searchMovieById } from '../../api/movieApi';
import {MovieInfo} from '../../components/MovieDetails/MovieDetails'

export const MovieDetails = () => {
 
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [status, setStatus] = useState('idle')
     const location = useLocation().state?.from ?? '/';
    
    useEffect(() => {
        const getMovieById = async () => {
            try {
                setStatus('pending')
                const { data } = await searchMovieById(id)
                if (data.length === 0) {
                    alert('Ooops, someting went wrong. Please, try again.')
                    setStatus('rejected')
                    return
                }
                setStatus('resolve')
                setMovie(data)
            } catch (err) {
                console.log(err);
                setStatus('rejected')
            }
            
        }
        getMovieById()
    }, [id])
    return (
        <main>
            <div>
            <Link to={location}> Go Back</Link>
            {movie&&
                <MovieInfo details={movie} />}
            {status === 'pending' && <Loader />}
            <Outlet/>
        </div>
        </main>
        
    )
}