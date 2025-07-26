import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css'
import Post,{loader as LoadData} from './routes/Post.jsx'
import Newpost,{action as newPostAction} from './components/newPost.jsx';
import RootLayout from './routes/rootLayout.jsx';
import Showid ,{loader as SinglePost}from './routes/showid.jsx';
 const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>,
 children:[
  {path: '/', element: <Post/>,
    loader:LoadData,children:[ { path: '/create-post', element: <Newpost/>,action:newPostAction }]},
    {path:'/:id',element:<Showid/>,loader:SinglePost},
  ]},
 ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
