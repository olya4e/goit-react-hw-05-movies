import { useState } from 'react'
import css from './SearchBar.module.css';
import { ImSearch } from "react-icons/im";
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
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input}  type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={query}
                onChange={handleQueryChange}
            />
            <button className={css.searchBtn} type="submit"><ImSearch className={css.searchBtnIcon} /></button>
        </form>
    )
}