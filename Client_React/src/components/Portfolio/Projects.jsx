import yt from '../../assets/img/youtube.webp'
import Page from '../../assets/img/Page.jpg'

const Projects = () => {
  return (
    <div id='projects' className='mb-8 md:mb-24'>
      <div className='flex flex-col justify-center items-center'>
                <p className=" text-sm md:text-lg text-neutral-400">Get to know more!</p>
                <h1 className="text-2xl md:text-5xl font-semibold text-white">Projects</h1>
      </div>

      <div className='flex flex-row flex-wrap md:flex-row justify-around'>
        <div className='flex flex-col m-2 md:m-10 border justify-around items-center border-neutral-400 rounded-xl md:w-72  w-36 '>
          <div className='h-36  w-36 md:h-72 md:w-72'>
            <img className='p-1 md:p-4 rounded-2xl' src={Page} alt="" />
          </div>
          <p className='text-sm md:text-2xl font-semibold'>Project</p>
          <div className='flex flex-row justify-around items-center'>
          <button className='text-xs md:text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl md:p-2 md:m-2  p-1'><a href="https://github.com/KrishnaAlaspure/DemoLandingPage/tree/main/DemoLandingPage" target='_blank'>Github</a></button>
          <button className=' text-xs md:text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl md:p-2 md:m-2 p-1'><a href="https://demo-landing-page-beta.vercel.app/" target='_blank'>Live Demo</a></button>
          </div>
        </div>

        <div className='flex flex-col m-2 md:m-10 border justify-around items-center border-neutral-400 rounded-xl md:w-72  w-36 '>
          <div className='h-36  w-36 md:h-72 md:w-72'>
            <img className='p-1 md:p-4 rounded-xl' src={yt} alt="" />
          </div>
          <p className='text-sm md:text-2xl font-semibold text-white '>YouTube Clone</p>
          <div className='flex flex-row justify-around items-center'>
          <button className='text-xs md:text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl md:p-2 md:m-2  p-1'><a href="https://github.com/KrishnaAlaspure/ytClone/tree/main/youTubeClone" target='_blank'>Github</a></button>
          <button className=' text-xs md:text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl md:p-2 md:m-2 p-1'><a href="http://ytclone-demo.s3-website.ap-south-1.amazonaws.com" target='_blank'>Live Demo</a></button>
          </div>
        </div>


        <div className='flex flex-col m-2 md:m-10 border justify-around items-center border-neutral-400 rounded-xl md:w-72  w-36 '>
          <div className='h-36  w-36 md:h-72 md:w-72'>
            <img className='p-1 md:p-4 rounded-xl' src={Page} alt="" />
          </div>
          <p className='text-sm md:text-2xl font-semibold'>Project</p>
          <div className='flex flex-row justify-around items-center'>
          <button className='text-xs md:text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl md:p-2 md:m-2  p-1'><a href="https://github.com/KrishnaAlaspure/DemoLandingPage/tree/main/DemoLandingPage" target='_blank'>Github</a></button>
          <button className=' text-xs md:text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl md:p-2 md:m-2 p-1'><a href="https://demo-landing-page-beta.vercel.app/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Projects
