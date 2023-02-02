import React, { lazy } from 'react';

const Home = lazy(() => import('../../pages/home/home'));

export const HOME_ROUTES = [
    {
        path: '*',
        element: <Home />
    },
]