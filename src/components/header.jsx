import {MdPostAdd,MdMessage} from 'react-icons/md'
import { Link } from 'react-router-dom';
export default function Header(){
 return<>
 <header className=' bottom-0 w-full bg-gray-800 text-white flex justify-between items-center p-4'>
    <h1>
        <MdMessage className='inline-block mr-2'/>
        Public Space
    </h1>
    <Link to="/create-post"
     className="bg-blue-500 no-underline text-white text-[14px] flex items-center px-4 py-2 rounded-lg hover:bg-black transition duration-300">
     New Post
     <MdPostAdd className='inline-block ml-2'/>
    </Link>
 </header>
 </>
}