import { useLocation } from "react-router-dom"
export const  About=({})=>{
const location=useLocation()
console.log(location.state)
return (
    <div>
        <h2>About Page</h2>
        <p>This is a demonstration of React Router 6 features.</p>
    </div>
)
}