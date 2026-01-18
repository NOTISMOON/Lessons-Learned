import { useDispatch } from 'react-redux'
import { toLogin } from '../../store/Auth/index'
   export const Login=()=> {
    const dispatch=useDispatch()
    return (<>
    <div>
        <h1>登录页</h1>
    </div>
    <button onClick={()=>{toLogin(),console.log('登录')}}>登录</button>
    </>)
}
export default Login