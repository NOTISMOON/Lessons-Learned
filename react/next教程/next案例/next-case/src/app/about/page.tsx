
const getData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("hello world")
            reject(new Error("error"))
        },1000)
    })
}
export default  async function About(){
    const data=await getData()
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}