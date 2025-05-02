import HTML from '../../assets/img/html-1.svg'
import CSS from '../../assets/img/css-3.svg'
import JS from '../../assets/img/javascript-1.svg'
import TW from '../../assets/img/tailwind-css-2.svg'
import TS from '../../assets/img/typescript.svg'
import NodeJs from '../../assets/img/nodejs-icon.svg'
import Reactjs from '../../assets/img/react-2.svg'
import MongoDB from '../../assets/img/mongodb-icon-1.svg'
import GIT from '../../assets/img/git-bash.svg'
import NextJS from '../../assets/img/next-js.svg'
import AWS from '../../assets/img/aws-2.svg'
import Confluence from '../../assets/img/confluence-1.svg'
import Docker from '../../assets/img/docker-4.svg'
import Jira from '../../assets/img/jira-3.svg'
import ExpressJS from '../../assets/img/express-js.svg'


const Skills = () => {
  return (
    <div id='skills' className='flex flex-col  mx-4 md:mx-36 justify-center items-center'>
      <div className='flex flex-col md:mb-10 mb-2 justify-center items-center'>
                <p className=" text-sm md:text-lg text-neutral-400">Get to know more!</p>
                <h1 className="text-2xl md:text-5xl font-semibold text-white">Skills</h1>
            </div>
      <div className='grid grid-cols-3 md:flex  md:flex-row md:flex-wrap  items-center gap-4 p-2 md:p-10 md:bg-gray-900 rounded-xl md:border'>
          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={HTML} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> HTML</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={CSS} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> CSS</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={Reactjs} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> ReactJS</p>
          </div>
          
          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={NodeJs} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> NodeJS</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={JS} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> JavaScript</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={TS} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> TypeScript</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={TW} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> Tailwind</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={MongoDB} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> MongoDB</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={GIT} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> GIT</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={NextJS} alt="" className='md:h-28 md:w-28 h-16 w-16 bg-white rounded-full ' />
            <p className='text-white text-md md:text-2xl font-semibold'> NextJS</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={ExpressJS} alt="" className='md:h-28 md:w-28 h-16 w-16 bg-white ' />
            <p className='text-white text-md md:text-2xl font-semibold'> ExpressJS</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={AWS} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> AWS</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={Confluence} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md  md:text-2xl font-semibold'> Confluence</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={Docker} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> Docker</p>
          </div>

          <div className=' p-2 md:p-4 flex flex-col justify-center items-center bg-transparent  rounded-xl border' >
            <img src={Jira} alt="" className='md:h-28 md:w-28 h-16 w-16' />
            <p className='text-white text-md md:text-2xl font-semibold'> Jira</p>
          </div>
      </div>
      
    </div>
  )
}

export default Skills
