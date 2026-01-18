import { useLoaderData, useLocation, useMatch, useParams, useSearchParams } from "react-router-dom"
export const  Contact=({})=>{
    const res=useLoaderData()
    console.log(res,'res')
    const location=useLocation()
    console.log(location)   
    const params=useParams()
    console.log(params)
    const [Search,setSearch]=useSearchParams()
    // console.log(Search.get('name'))
    // setSearch({
    //     obg:'化学',
    // })
const match=useMatch('/contact/:id?')
console.log(match,'xxxx')
return (
    <div>
        <h2>Contact Page</h2>
        <p>Feel free to reach out with any questions.</p>
    </div>
)
}

function useRoute(arg0: string) {
    throw new Error("Function not implemented.")
}
