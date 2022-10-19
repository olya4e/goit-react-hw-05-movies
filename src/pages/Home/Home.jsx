import {useEffect, useState} from 'react'
import { ListMovies } from "components/ListMovies/ListMovies"
import { Loader } from "components/Loader/Loader";
import { fetchTrendingMovie } from '../../api/movieApi';
import css from 'pages/Home/Home.module.css';

export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [status, setStatus] = useState('idle')
    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
            setStatus('pending')
            const { data } = await fetchTrendingMovie();
            if (data.length === 0) {
                alert('Ooops, someting went wrong. Please, try again.')
                setStatus('rejected')
                return
            }
            setStatus('resolved')
            setTrendingMovies(data.results)
          
        } catch (err) {
            console.log(err)
            setStatus('rejected');
            return
      }
    
        }
        getTrendingMovies()
     
    }, [])
    if (trendingMovies === null) {
        return
    }
    
    return (
        <main>
            <h1 className={css.title}>Trending today</h1>
            {trendingMovies.length > 0 && (
                <ListMovies movies={trendingMovies} path={'movies/'}/>
            )}
            {status === 'pending' && <Loader/>}
        </main>
    )
}