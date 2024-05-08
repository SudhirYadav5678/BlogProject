import React, {useEffect, useState} from 'react'
import {container, PostForm} from '../components/index.js'
import authService from "../appwrite/auth.js";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            authService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <container>
            <PostForm post={post} />
        </container>
    </div>
  ) : null
}

export default EditPost