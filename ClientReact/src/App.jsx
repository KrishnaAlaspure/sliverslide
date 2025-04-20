import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../src/assets/components/Login'
import DashBoard from './assets/components/DashBoard'
import PageNotFound from './assets/components/PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useAppSelector } from './assets/state/hooks/hooks'




const App = () => {
  const isLoggedIn = useAppSelector((state) => state.AuthState.isLoggedIn);
    const GoogleAuthProviderWrapper = () =>{
        return(<GoogleOAuthProvider clientId="535580963544-471eoae5rlfre6fmb9j0vmjl144v68uf.apps.googleusercontent.com">
            <Login ></Login>
        </GoogleOAuthProvider>)
    }
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'}/>}/>
        <Route path='/login'  element={<GoogleAuthProviderWrapper/>}/>
        <Route path='/dashboard' element={isLoggedIn ? <DashBoard /> : <Navigate to="/login" />}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
