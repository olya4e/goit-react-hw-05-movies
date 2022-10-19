import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchReviews } from '../../api/movieApi'

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
            {reviews.length !== 0 ?
                (<ul>
                    {reviews.map(({ id, author, content }) => {
                        return <li key={id}>
                            <h4>{author}</h4>
                            <p>{ content}</p>
                        </li>
                    })}
                </ul>) :
            <p>We don't have any reviews for this movie.</p>    
    }
        </>
    )
}