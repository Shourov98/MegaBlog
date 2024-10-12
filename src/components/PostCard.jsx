import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4 shadow-md'>
        <div className='w-full mb-4'>
          {/* Maintain 16:9 aspect ratio for the image */}
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className='rounded-xl w-full h-[200px] object-cover' 
          />
        </div>
        <h2 className='text-xl font-bold text-center'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
