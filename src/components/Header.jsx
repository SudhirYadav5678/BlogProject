import React from 'react'
import {container, Logo, LogoutBtm} from './index.js'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux' //to check in store that user is login or not
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)// to check the user is login or logout
  const navigate = useNavigate()// to show the navigater in the header for array to show navigater.

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtm />
              </li>
            )}
          </ul>
        </nav>
        </container>
    </header>
  )
}

export default Header