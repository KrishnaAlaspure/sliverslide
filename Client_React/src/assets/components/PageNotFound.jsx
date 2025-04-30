import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate =useNavigate()
  return (
    <div className='h-screen flex flex-col items-center justify-center m-10'>
    <h1>Page NotFound </h1>
    <button className=' border-2 ' onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  )
}

export default PageNotFound
