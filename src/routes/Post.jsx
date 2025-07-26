import { Outlet } from "react-router-dom"
import DisplayPost from "../components/displaypost"
export default function App(){
   return <>
   <Outlet />
   <DisplayPost />
   </>
}
export async function loader() {
  // This function can be used to load data before rendering the component
    const res =  await fetch('http://localhost:3000/api/messages')
    const resData = await res.json()
    return resData; // Return the fetched data
}