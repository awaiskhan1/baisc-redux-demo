import { SET_FAVOURITE_BOOK } from './favouriteBook.types';

export const setFavouriteBooks = (books) => ({
    type: SET_FAVOURITE_BOOK,
    books
});
