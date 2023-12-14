import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Login from "../pages/Login/Login"
import NotFound from "../NotFound/NotFound"
import About from "../pages/About/About"
import Users from "../pages/User/Users"
import Contact from "../pages/Contact/Contact"

import UserDetails from "../pages/User/UserDetails"
import Posts from "../pages/Post/Posts"
import PostDetails from "../pages/Post/PostDetails"
import Homes from "../pages/Home/Homes"
import HomeDetails from "../pages/Home/HomeDetails"


const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/home",
                element:<Homes/>,
                loader:()=>fetch('https://fakestoreapi.com/products')
            },
            {
                path:"/home/:id",
                element:<HomeDetails/>,
                loader:({params})=>fetch(`https://fakestoreapi.com/products/${params.id}`)
            },
            {
                path:"/login",
                element:<Login/>
            },
            
            {
                path:"/users",
                element:<Users/>,
                loader:()=>fetch("https://jsonplaceholder.typicode.com/users")
            },
            {
                path:"/users/:userid",
                element:<UserDetails/>,
                loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
            },
          
            {
                path:"/post",
                element:<Posts/>,
                loader: () => fetch ("https://jsonplaceholder.typicode.com/posts")
            },
            {
                path:"/post/:id",
                element:<PostDetails/>,
                loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]
    },
   
   
    {
        path:'*',
        element:<NotFound/>
    }
])

export default routes

