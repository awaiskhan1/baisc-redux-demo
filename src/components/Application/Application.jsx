import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteHandler from '../../routes/RouteHandler'
import { Routes } from '../../routes/routes'
import { Naviagtion } from '../Navigation/Navigation';


export const Application = () => {
  return (
      <BrowserRouter>
        <Naviagtion routes={Routes} />
        <RouteHandler />
      </BrowserRouter>
  )
}
