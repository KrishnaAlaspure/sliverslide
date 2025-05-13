import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import PageNotFound from './components/PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useAppSelector } from './state/hooks/hooks'
import PortfolioMain from './components/Portfolio/PortfolioMain'
import NavBar from './components/NavBar'
import Chatbot from './components/ChatBot/Chatbot'




const App = () => {
  const isLoggedIn = useAppSelector((state) => state.AuthState.isLoggedIn);
    const GoogleAuthProviderWrapper = () =>{
        return(<GoogleOAuthProvider clientId="535580963544-471eoae5rlfre6fmb9j0vmjl144v68uf.apps.googleusercontent.com">
            <Login ></Login>
        </GoogleOAuthProvider>)
    }
  return (
    <div className='bg-black min-h-screen w-full'>
    {isLoggedIn && <NavBar />}
      <Routes>
        <Route path='/' element={<Navigate to={'/login'}/>}/>
        <Route path='/login'  element={<GoogleAuthProviderWrapper/>}/>
        <Route path='/dashboard' element={isLoggedIn ? <DashBoard /> : <Navigate to="/login" />}/>
        <Route path='/portfolio' element={isLoggedIn ? <PortfolioMain /> : <Navigate to="/login" />}/>
        <Route path='/chatbot' element={isLoggedIn ? <Chatbot /> : <Navigate to="/login" />}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
