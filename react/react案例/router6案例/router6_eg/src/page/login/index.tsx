import { useDispatch } from 'react-redux'
import { toLogin } from '../../store/Auth/index'
import { useNavigate } from 'react-router-dom'
   export const Login=()=> {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleLogin=async()=>{
         await dispatch(toLogin())
        navigate('/')
    }
    return (<>
    <div>
        <h1>登录页</h1>
    </div>
    <button onClick={handleLogin}>登录</button>
    </>)
}
export default Login
