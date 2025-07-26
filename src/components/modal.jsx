import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Modal({children}){
    const Navigate = useNavigate();
function closeModal(){
Navigate('/'); // navigate to the home page
 }
return<>
{/* // backdrop for modal */}
<div onClick={closeModal} className="fixed block top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.3)] z-[1]"/>
{/* modal  design */}
<dialog open={true} className=" m-auto rounded-xl min-w-xs bg-transparent z-5 border-none  shadow-2xl p-0  overflow-hidden">
{children}
</dialog>
 </>
}