import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate =useNavigate()
  return (
    <div className='h-screen flex flex-col items-center justify-center m-10 text-white'>
    <h1>Page NotFound </h1>
    <button className=' border-2 p-1 bg-gradient-to-r from-sky-400 to-sky-900  rounded-xl' onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  )
}

export default PageNotFound
