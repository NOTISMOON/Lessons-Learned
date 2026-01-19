import  {createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit'

const AuthSlice=createSlice({
    name:'auth',
    initialState: {
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
    },
    extraReducers(builder) {
        builder.addCase(toLogin.pending, (state) => {
            state.isLogin=false
            console.log('登录中')
        })
        builder.addCase(toLogin.rejected, (state) => {
            state.isLogin=false
            console.log('登录失败')
        })
        builder.addCase(toLogin.fulfilled, (state, action) => {
            state.token=action.payload
            state.isLogin=true
            console.log('登录成功')
        })
    },
})

export const toLogin=createAsyncThunk('auth/login',async()=>{
     const loginApi=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('123456')
            },1000)
        })
    }
    const res = await loginApi()
    return res
})
export const {setToken,removeToken}=AuthSlice.actions
// export const toLogin =()=> async(dispatch: any)=>{
//     //模拟登录接口
//     const loginApi=()=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve('123456')
//             },1000)
//         })
//     }
//    const res =await loginApi()
//     dispatch(setToken(res))
//      console.log(res)
// }
export default AuthSlice.reducer
