import Modal from "../components/modal";
import { useLoaderData } from "react-router-dom";
import List from "../components/postList"
export  default  function showID(){
    const post = useLoaderData()
return<Modal>
    <List  id={post.id} author={post.author} message={post.message} /> 
</Modal>
}
export async function loader({params}){
    const response =  await fetch('http://localhost:3000/api/messages/'+params.id);
    const resData = await response.json();
    console.log(resData)
    return resData
}