import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import {useParams, Outlet } from 'react-router-dom';
import { searchMovieById } from '../api/movieApi';
import {MovieInfo} from '../components/MovieDetails/MovieDetails'

export const MovieDetails = () => {
 
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [status, setStatus] = useState('idle')
    // const location=useLocation()
    
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
        <div>
            {movie&&
                <MovieInfo details={movie} />}
            {status === 'pending' && <Loader />}
            <Outlet/>
        </div>
    )
}