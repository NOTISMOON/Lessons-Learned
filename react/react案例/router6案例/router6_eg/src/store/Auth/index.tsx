import  {createSlice} from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
 const AuthSlice=createSlice({
    name:'auth',
    initialState:{
        token:'',
        isLogin:false
    },
    reducers:{
        setToken(state,action){
            state.token=action.payload
            state.isLogin=true
        } ,
        removeToken(state,action){
        state.token=''
        state.isLogin=false
        }
    }
})

export const {setToken,removeToken}=AuthSlice.actions
export const toLogin =()=> async(dispatch: any)=>{
    //模拟登录接口
    confirm('登录')
    const loginApi=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('123456')
            },1000)
        })
    }
   const res =await loginApi()
    dispatch(setToken(res))
    const navigate= useNavigate()
     navigate('/app')
     console.log(res)
}   

export default AuthSlice.reducer