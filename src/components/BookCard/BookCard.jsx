import React from 'react'
import './bookCard.css';

export const BookCard = ({ book, favButton}) => {
    const favButtonHandler = () => {
        if (favButton) favButton(book)
    }
    return (
        <div className='card'>
            {book?.volumeInfo?.imageLinks && <img className='card-image' src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />}
            <h5 className='card-title'>{book?.volumeInfo?.title}</h5>
            <p className='card-description'>Published date: {book?.volumeInfo?.publishedDate} </p>
            {favButton && <button className='card-button' onClick={favButtonHandler}>Add to Favorite</button>}
        </div>
    )
}
