import React from 'react'
import { container, PostForm } from '../components/index.js'

function AddPost() {
  return (
    <div className='py-8'>
        <container>
            <PostForm />
        </container>
    </div>
  )
}

export default AddPost