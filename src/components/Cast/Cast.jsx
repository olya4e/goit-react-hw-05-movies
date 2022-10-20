import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCast } from '../../api/movieApi'
import {IMG_URL} from 'constants/constants';
import css from './Cast.module.css'

export const Cast = () => {
    const [cast, setCast] = useState([])
    const { id } = useParams()
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
        <ul className={css.list}>
            {cast.map(({id, name, profile_path, character})=>{
                return (
                    <li key={id} >
                        <div className={css.item}>
                            <img src={profile_path? `${IMG_URL}${profile_path}`: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} alt={name} width='150' height='225'/>
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </div>
                  </li>
              )  
            })}
        </ul>
    )
}