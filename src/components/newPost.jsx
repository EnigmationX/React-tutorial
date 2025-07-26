import {useState,useEffect} from "react";
import {MdCheck} from 'react-icons/md';
import Modal from "./modal.jsx";
import { Link,Form,redirect } from "react-router-dom";
export default function newPost(){
    
 const [x,y] = useState(150); // text area limit section
// function to show the number of letters left in the text area
    function showLetterLeft(e){
    const _limit = +e.target.getAttribute('maxLength');
    const valueLength = e.target.value.length;
    const valueRemain = (_limit - valueLength)
    y(valueRemain);
    }


    return<Modal>
    <Form method='POST' className=" bg-white text-black py-[30px] px-[20px] border-gray-700 grid grid-cols-1 gap-5 max-w-xs rounded-xl border-2 p-2.5">
        <div className="flex flex-col">
            <label name='body'>Message</label>
            <textarea name="message" maxLength={150}  className="border-gray-500 border-2 rounded-sm resize-none" required  rows={3}></textarea>
            {x>75?<i className="text-right text-[12px] text-green-500 ">{x}</i>:
            x>38?<i className="text-right text-[12px] text-amber-500 ">{x}</i>:
            <i className="text-right text-[12px] text-red-500 ">{x}</i>}
        </div>
         <div className="flex flex-col">
            <label name='name'>Your name</label>
            <input name="author" className="border-gray-500 border-2 rounded-sm" type="text" required/>
        </div>
        <div className="flex justify-end">
        <Link to="/" className="flex items-center justify-around no-underline text-red-700 text-[14px] px-4 py-2  mr-2.5">Cancel</Link>
        <button type="submit" className="bg-green-200 flex items-center text-green-500 text-[14px] px-4 py-2 rounded-lg hover:bg-green-300 transition duration-300">Post<MdCheck className="text-green-700  ml-1"/></button>
        </div>

    </Form>
    </Modal>
}
export async function action({request}){
 const formData = await request.formData();
 const postData = Object.fromEntries(formData)
 console.log(postData);
  await  fetch('http://localhost:3000/api/messages',{
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json'
                          },
                          body: JSON.stringify(postData)
                      })
                      return redirect('/'); // redirect to the home page after posting
}