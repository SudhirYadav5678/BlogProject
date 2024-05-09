import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice.js'
import Headers from './components/Header/Headers.jsx'
import {Footer} from './components/index.js'
import { Outlet } from 'react-router-dom'



function App() {
  const [loading, setloading]= useState(true)
  const dispatch= useDispatch()//to send data and recive data from other files
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
          dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  },[])


  return !loading? (
    <div className='min-h-screen flex-wrap content-between bg-gray-700'> test
        <Headers />
        {/* <main><Outlet/></main> */}
        <Footer />
    </div>

  ):("Please wait for some time ")
}

export default App
