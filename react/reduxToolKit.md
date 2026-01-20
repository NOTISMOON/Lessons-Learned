# ReduxToolkit状态管理

## 安装

```
 npm i @reduxjs/toolkit react-redux
```

## 使用

### 创建

通过 createSclice 创建分片   

eg:

```ts
//auth.store.ts
import {createSclice} from '@reduxjs/toolkit'
export const AuthSlice= createSlice({
    name:Auth,
     initialState:{
        token:""
        isLogin:false
    }
    reducers:{
   setToken(state,action){
    //ToDo
     }
 }   
})
export const {setToken}=AuthSlice.actions
export default AuthSlice.reducer
```

## 注册

通过 configureStore 进行注册  然后使用 `<Provider>`标签进行注册

```tsx
//index.ts 
import AuthReducer from 'auth.store.ts'
export const store=configureStore({
 reudcer:{
   auth:Auth
 }
})
//mian.tsx
import {store}from 'index,ts'
<Provider  store={store} >
    //包裹组件
 </Provider >


```

## 使用

//通过 useSelector 拿去仓库的全局变量  通过dispatch去派发任务  异步可以通过手动创建RTK异步chunk 或者使用内置的createAsyncChunk 创建

```ts
//auth.store.ts
//模拟登录接口
   const loginApi=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('123456')
            },1000)
        })
    }
   //手动创建
   export const toLogin =()=>async(dispatch)=>{
    try{
    const   res= await loginApi()
       dispatch(setToken(res))
       
     } catch (e) {
       throw Error(e)
    }
}
   //使用内置createAsyncChunk 
  export const toLogin = createAsyncChunk('Auth/Login',async()=>{
    const res= await loginApi()
    return res
  }) 
  export const AuthSlice= createSlice({
    name:Auth,
     initialState:{
        token:""
        isLogin:false
    },
    reducers:{
   setToken(state,action){
    //ToDo
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
 }   
})
//login.tsx 
   import {useDispatch,useSelecor} from 'react-redux'
   import {tologin}from'auth.store.ts'
   const islogin =useSelector((state: any) => state.auth.isLogin)
   const dispatch=useDispatch()
   const loginHandler=()=>{
       dispatch(toLogin())
   }
   
   
   
```

