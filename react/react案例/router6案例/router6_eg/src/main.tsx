import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route, Link ,BrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import App from './App.tsx'
import { About } from './page/about/index.tsx'
import { Contact } from './page/contact/index.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { store } from './store/index.tsx'
import {Provider } from 'react-redux'
import Login from './page/login/index.tsx'
import { Auth } from './components/Auth/index.tsx'

const route=createBrowserRouter(createRoutesFromElements(<>  
   <Route path="/app" element={ <Auth>
            <App />
          </Auth>} >
      <Route path="about" element={<About />} />
      <Route path="contact/:id?" loader={ async(params)=>{
                //params loader提供的参数  可以获取一些可能会用的到请求的信息
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
       return res
      }} element={<Contact />} />
    </Route>
 
  <Route path="/login" element={<Login />} />
    </>
))
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
{/* <BrowserRouter basename='pc'>
  <Routes>
    <Route path="/" element={< App />} >
      <Route path="about" element={<About />} />
      <Route path="contact/:id?"element={<Contact />} />
    </Route>
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
   </BrowserRouter> */}
   <Provider store={store}>
   <RouterProvider router={route} />
   </Provider>
  </StrictMode>,
)
