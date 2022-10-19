import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {fetchMovieByQuery} from 'api/movieApi';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ListMovies } from 'components/ListMovies/ListMovies';
import {Loader} from 'components/Loader/Loader';
export const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [status, setStatus] = useState('idle');
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        const getMovieByQuery = async () => {
            if (!query) {
                return
            }
            try {
                setStatus('pending')
                const { data } = await fetchMovieByQuery(query)
                if (data.length === 0) {
                    alert('Ooops, someting went wrong. Please, try again.');
                    setStatus('rejected');
                    return;
                }
                setSearchMovies(data.results);
                setStatus('resolved');
            }
                
            catch (err) {
                console.log(err);
                setStatus('rejected');
            }
        }
          getMovieByQuery()
    }, [query])

     const handleFormSubmit = searchQuery => {
        setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});
        setSearchMovies([]);
  };
    
    return (
        <main>
            <SearchBar onSubmit={handleFormSubmit} />
             {searchMovies.length > 0 && <ListMovies movies={searchMovies} />}
            {status === 'pending' && <Loader />}
        </main>
    )
}