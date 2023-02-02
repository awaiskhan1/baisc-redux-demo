import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookCard } from '../../components/BookCard/BookCard';
import { selectFavouriteBook } from '../../store/favouriteBooks';
import './books.css';

 const FavouriteBook = () => {

    const books = useSelector(selectFavouriteBook) || [];


    useEffect(() => {
        console.log("FavouriteBook =========>", books);
    }, [books])

    return (
        <div>
            <header className='booksearch-header'>
                <h2>Favorite Books</h2>
            </header>

            {books.length > 0 ?(
                <div className='book-result'>
                    {books.map((book, i) => (
                        <BookCard key={i} book={book}  />
                    ))}
                </div>
            ) : (
                <>
                    <p> No Favorite Book </p>
                    <Link to="/book">Search Books</Link>
                </>
            )}
        </div>
    )
}

export default FavouriteBook