import { Link } from "react-router-dom";
export default function Post({id,message,author}){
    return(
        <li  className="p-1.5  mt-5   border-2 font-[300] border-gray-500 rounded-xl bg-amber-50">
       <Link className="no-underline w-0" to={`/${id}`}>  
        <div className="text-black font-bold">{author}</div>
        <div className="text-md text-black">{message}</div>
         </Link>
        </li>
    )
}
