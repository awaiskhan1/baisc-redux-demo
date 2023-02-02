import React, { lazy } from 'react';

const Book = lazy(() => import('../../pages/book'));
const FavouriteBook = lazy(() => import('../../pages/book/FavouriteBook'));

export const POKE_ROUTES = [
    {
        path: 'book',
        element: <Book />
    },
    {
        path: 'favourites',
        element: <FavouriteBook />
    },
]