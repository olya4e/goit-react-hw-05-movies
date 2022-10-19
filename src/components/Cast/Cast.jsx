import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCast } from '../../api/movieApi'
import { ImUser } from 'react-icons/im'

export const Cast = () => {
    const [cast, setCast] = useState([])
    const { id } = useParams()
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    useEffect(() => {
        const getCast = async () => {
            try {
                const { data } = await fetchCast(id)
                setCast(data.cast)
             }
            catch (err) {
                console.log(err);
            }
      }
    getCast()
    }, [id])
    
    return (
        <ul>
            {cast.map(({id, name, profile_path, character})=>{
                return (
                    <li key={id}>
                        <div>
                            <img src={profile_path ? `${IMG_URL}${profile_path}`: <ImUser/>} alt={name} width='200' />
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </div>
                  </li>
              )  
            })}
        </ul>
    )
}