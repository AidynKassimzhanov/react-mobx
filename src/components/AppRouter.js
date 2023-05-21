import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes'
import DiscoverGames from '../pages/DiscoverGames'

const AppRouter = () => {
  return (
    // <Router>
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} />
            )}
        </Routes>
    // </Router>
  )
}

export default AppRouter