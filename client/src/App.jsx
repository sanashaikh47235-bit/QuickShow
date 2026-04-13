import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation, } from 'react-router-dom'
import  Home  from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Layout from './pages/admin/Layout'
import AddShows from './pages/admin/AddShows'
import Dashboard from './pages/admin/Dashboard'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

function SignupPage() {
  return (
    <div>
      <h2>Create Account</h2>
      <SignUp />
    </div>
  );    
}

  return (
    <>
     <Toaster/>
     {!isAdminRoute &&  <Navbar/>} 
      <Routes>
         <Route path='/Home' element={<Home/>} />
         <Route path='/movies' element={<Movies/>} />
         <Route path='/movies/:id' element={<MovieDetails/>} />
         <Route path='/movies/:id/:date' element={<SeatLayout/>} />
         <Route path='/my-bookings' element={<MyBookings/>} />
         <Route path='/favorite' element={<Favorite />} />
         <Route path='/sign-in' element={<SignIn/>} />
         <Route path='/sign-up' element={<SignUp/>} />
         <Route path='/admin/*' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='add-shows' element={<AddShows/>}/>
            <Route path='list-shows' element={<ListShows/>}/>
            <Route path='list-bookings' element={<ListBookings/>}/>
        </Route>
         </Routes>
       {!isAdminRoute &&  <Footer/>} 

    </>
  )
}

export default App
