
import { useGoogleLogin } from '@react-oauth/google'
import { googleAuth } from '../services/api';
import { useAppDispatch } from '../state/hooks/hooks';
import { setLoggedIn } from '../state/slices/AuthStateSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
const dispatch = useAppDispatch();
const navigate = useNavigate();

    const responseGoogle = async(authResult) =>{
      try {
        console.log("result from Google",authResult['code']);
        if(authResult['code']){
          const result = await googleAuth(authResult['code']);
          console.log(result.data);
          dispatch(setLoggedIn(true));
          sessionStorage.setItem('accessToken',JSON.stringify(result.data.googleAccessToken));
          toast.info("Login Successfull",{
            position: "center",
            autoClose: 2000,});
          navigate('/dashboard');
              
            }
        } catch (error) {
            console.log("Error while login",error);   
        }
    }
    const onGoogleLogin = useGoogleLogin({
        onSuccess : responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code'
    }) 
  return (
    <div className='h-screen w-100 flex flex-col items-center justify-center  bg-black'>
      <ToastContainer/>
      <div className='flex flex-col items-center md:text-2xl text-lg text-white  font-bold justify-center  rounded-lg p-10'>
      <h1>Welcome Dev&apos;s </h1>
      <h1>I am Krishna Alaspure </h1>
      <button className='border-2 p-2 rounded-lg m-4 bg-gradient-to-r from-sky-400 to-sky-900 ' onClick={onGoogleLogin}>Login to see more!</button>
      </div>
    </div>
  )
}

export default Login
Login