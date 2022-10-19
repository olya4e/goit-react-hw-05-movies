import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            This page doesn't exist. Go <Link to='/'> home</Link>
        </div>
    )
}