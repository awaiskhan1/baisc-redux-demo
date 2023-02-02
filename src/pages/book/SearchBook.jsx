import React, { useState } from 'react'
import { BookCard } from '../../components/BookCard/BookCard';
import { getFavouriteActions } from '../../store/favouriteBooks';
import './books.css';

export const SearchBook = () => {

    const [books, setBooks] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const callAPI = async (search = '') => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
        const data = await response.json();
        if (data && data.items) setBooks(data.items)
    }

    const searchHandler = () => {
        if (searchInput) callAPI(searchInput)
    }

    const onInputChange = (event) => {
        if (event && event.target) setSearchInput(event.target.value);
    }

    const favoriteButtonHandler = (data) => {
        getFavouriteActions().setFavouriteBooks(data);
    }

    return (
        <div>
            <header className='booksearch-header'>
                <input className='' type="text" value={searchInput} onChange={onInputChange} placeholder="Search Book" id="search-book" />
                <button onClick={searchHandler}>Search</button>
            </header>

            {books.length > 0 && (
                <div className='book-result'>
                    {books.map((book, i) => (
                        <BookCard key={i} book={book} favButton={favoriteButtonHandler} />
                    ))}
                </div>
            )}
        </div>
    )
}

// export default SearchBook