import { useState } from 'react'
import './App.css'
import { Link ,Outlet, useNavigate } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate()
  return (
    <>
    <Link to="/"> Home</Link>
    <Link to="/about"> About</Link>
    <Link to="/contact"> Contact</Link>
    <h1>app</h1>
    <button onClick={()=>navigate('/about',{
    state:{
      id:'123',
      name:'张三',
      age:18,
    }
    })}>跳转到about页
    </button>
    <button onClick={()=>navigate('/contact',{
    state:{
      id:'123',
      name:'张三',
      age:18,
    }
    })}>跳转到contact页
    </button>
    <Outlet />
    </>
  )
}
export default App
