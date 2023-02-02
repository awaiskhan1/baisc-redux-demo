import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Fallback } from '../components/Fallback/Fallback';
import { Routes } from "./routes";



const RouteHandler = () => {
    const element = useRoutes(Routes);

    return <Suspense fallback={<Fallback />}>{element}</Suspense>;
};

export default RouteHandler;
