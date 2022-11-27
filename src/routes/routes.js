import { Home } from '../modules/home'
import { Login } from '../modules/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from '.'
import { Fragment } from 'react'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<PrivateRoutes />} >
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}
