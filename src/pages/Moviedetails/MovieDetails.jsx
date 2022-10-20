import { useState, useEffect, Suspense } from 'react';
import {useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { searchMovieById } from '../../api/movieApi';
import { MovieInfo } from 'components/MovieDetails/MovieDetails'
import {Loader} from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import { useRef } from 'react';

export default function MovieDetails () {
 
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [status, setStatus] = useState('idle')
    const location = useLocation();
    const prevLink = useRef(location.state?.from)
    
    
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
            <Link className={css.goBackBtn} to={prevLink.current??'/'}> Go Back</Link>
            {movie&&
                <MovieInfo details={movie} />}
            {status === 'pending' && <Loader />}
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
            </Suspense>
        </div>
        </main>
        
    )
}