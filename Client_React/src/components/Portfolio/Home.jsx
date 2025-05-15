import { Linkedin,Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import KrishnaAlaspure from '../../assets/PDF/KrishnaAlaspure.pdf'
import avatar from '../../assets/img/Profile1.jpg'

const Home = () => {
  return (
    <div id='home' className='text-white flex flex-col md:flex-row  w-full md:justify-between items-center p-10 md:p-20 gap-5 md:gap-50'>
        <div>
            <img src={avatar} className=' rounded-full' alt="" />
        </div>


        <div className='md:w-2/4 md:pt-10  flex flex-col items-start'>
                <div ><p className="text-sm md:text-lg">Hello I&apos;m</p></div> 
                <div><h1 className="text-3xl md:text-5xl ">Krishna Alaspure</h1></div>
                <div><h1 className="text-2xl md:text-3xl text-neutral-700 md:mt-2">MERN Stack Developer</h1></div>
                <div className="flex gap-6 justify-center items-center mt-2 md:mt-3">
                <button className="bg-gradient-to-r from-orange-400 to-orange-900 border border-white rounded-md text-sm md:text-lg text-black px-2 hover:cursor-pointer ">
                <a href={KrishnaAlaspure} download="myFile">Download file</a>
                    </button>
                <button className="bg-gradient-to-r from-orange-400 to-orange-900 border border-white rounded-md  text-sm md:text-lg text-black px-2"><a href='#contact'>Contact Me</a></button>
                </div>
                <div className="flex justify-center mt-5">
                <div className="flex mx-6 h-100 rounded-lg text-blue-600 hover:cursor-pointer" >
                <a href="https://www.linkedin.com/in/krishna-alaspure-522373159/" target="_blank"><Linkedin size={40} /></a>
                </div>
                <div className="flex mx-6 h-100 rounded-lg hover:cursor-pointer" >
                <a href="https://github.com/KrishnaAlaspure" target="_blank"><Github size={40} href=""/></a>
                </div>
                <div className="flex mx-6 h-100 rounded-lg text-pink-800 hover:cursor-pointer" >
                <a href="https://www.instagram.com/krishvarshalas/?next=%2F" target="_blank"><Instagram size={40}/></a>
                </div>
            </div>
        </div>



        
        
    </div>
  )
}

export default Home
