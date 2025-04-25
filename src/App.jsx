import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPAge'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPAge'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={ <MainLayout/> }>
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<JobsPage/>} />
    <Route path='/jobs/:id' element={<JobPage/>} />
    <Route path='*' element={<NotFoundPage/>} />
  </Route>
  )
)

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App
