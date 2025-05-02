import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'

function PortfolioMain() {
  

  return (
    <>   
      <div className='bg-black h-auto w-full'>
        <NavBar />
        <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
      </div>
    </>
  )
}

export default PortfolioMain
