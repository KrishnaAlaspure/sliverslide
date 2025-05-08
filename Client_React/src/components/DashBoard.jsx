import { useNavigate } from "react-router-dom";
import Chatbot from "./ChatBot/Chatbot";


const DashBoard = () => {
  const navigate = useNavigate();
  const onClickHandle = () => {
    navigate('/portfolio');
    
  }
  return (
    <div className='max-h-screen w-100 flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center md:text-2xl text-lg text-white  font-bold justify-center  rounded-lg p-10'>
      <h1>Working on Something Big! </h1>
      <button className='border-2 p-2 rounded-lg m-4 bg-gradient-to-r from-sky-400 to-sky-900 ' onClick={onClickHandle}>See the Portfolio</button>
      <Chatbot/>
      </div>
    </div>
  )
}

export default DashBoard
