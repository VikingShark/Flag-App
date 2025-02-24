import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

/* Components */
import SearchBar from './components/SearchBar'
// import DropDown from './components/DropDown'

/* Pages */
import HomePage, { getCountriesByQueryStringLoader} from './pages/Home'
import CountryPage, {CountryPageLoader} from './pages/CountryPage'

/* Layouts */
import RootLayout from './layouts/RootLayout'


const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} loader={getCountriesByQueryStringLoader} />
    <Route path="country/:CountryCode" element={<CountryPage />} loader={CountryPageLoader} />
  </Route>
)

const router = createBrowserRouter(routesFromElements);


function App() {

  return (
    <>
      <div className="App">
          <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
