import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchReviews } from '../../api/movieApi'
import css from './Reviews.module.css';

export const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const getReviews = async () => {
            try { 
                const { data } = await fetchReviews(id)
                setReviews(data.results)
            } catch (err) {
              console.log(err);
          }
      }
    getReviews()
    }, [id])
    
    return (
        <>
            <div>
                {reviews.length !== 0 ?
                (<ul className={css.list}>
                    {reviews.map(({ id, author, content }) => {
                        return <li className={css.item} key={id}>
                            <h4 className={css.author}>{author}</h4>
                            <p>{ content}</p>
                        </li>
                    })}
                </ul>) :
            <p className={css.noReview}>We don't have any reviews for this movie.</p>    
    }
            </div>
        </>
    )
}