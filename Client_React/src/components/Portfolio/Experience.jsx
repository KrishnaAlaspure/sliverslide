// import INFY from '../../assets/img/INFY_BIG.svg'

const Experience = () => {
  return (
    <div id='experience' className='flex flex-col mb-8 md:mb-20 md:-mt-32 '>
      <div className="flex flex-col justify-center items-center mt-5 md:mt-40 mb-1 md:mb-5">
        <p className="text-sm md:text-lg text-neutral-400">Get to know more about!</p>
        <h1 className="text-2xl md:text-5xl font-semibold text-white">Experience</h1>
      </div>

      

      <div className="mx-5 md:mx-44 md:border p-8 rounded md:bg-zinc-900">
    {/* <!-- Item #3 --> */}
    <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Infosys Pvt. Ltd.</div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Nov, 2023</time>
            <div className="text-xl font-bold text-slate-300">Senior System Engineer</div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-500">Worked on backend technologies to create robust RESTful APIs, facilitating seamless front-end and back-end communication. Leveraged Node.js and Express.js to design endpoints and optimize performance, enhancing user experience.</div>
    </div>

    {/* <!-- Item #2 --> */}
    <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Infosys Pvt. Ltd.</div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Oct, 2021</time>
            <div className="text-xl font-bold text-slate-300">System Engineer</div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-500">I got a chance to work in a production environment, where I was responsible for developing and deploying web applications that directly impacted user experience. This opportunity allowed me to collaborate with cross-functional teams, troubleshoot real-time issues, and implement best practices for code quality and performance optimization.</div>
    </div>

    {/* <!-- Item #1 --> */}
    <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Infosys Pvt. Ltd.</div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">June, 2021</time>
            <div className="text-xl font-bold text-slate-300">Trainee System Engineer</div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-500">Trained in Full Stack technology, with a strong emphasis on the MERN stack.</div>
    </div>
    
    
    
    


</div>
      
    </div>
  )
}

export default Experience
