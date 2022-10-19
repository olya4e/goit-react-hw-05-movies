import {useState} from 'react'
export const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('')

    const handleQueryChange = (e) => {
        setQuery(e.target.value.toLowerCase())
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.trim() === '') {
      alert('Please, enter your search term into the search field!');
      return;
    }

    onSubmit(query);
    setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input  type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={query}
                onChange={handleQueryChange}
            />
        <button type="submit">Search</button>
        </form>
    )
}