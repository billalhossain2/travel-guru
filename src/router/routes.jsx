import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../pages/layouts/MainLayout";
import Booking from "../pages/Booking";
import Hotels from "../pages/Hotels/Hotels";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import News from "../pages/News";
const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/booking/:id',
                element:<Booking></Booking>,
                loader:(({params:{id}})=>fetch(`https://travel-guru-server-billalbelal621-gmailcom.vercel.app/spots/${id}`))
            }
        ]
    },
    {
        path:'/:destination/hotels/:id',
        element:<Hotels></Hotels>,
        loader:(({params:{id}})=>fetch(`https://travel-guru-server-billalbelal621-gmailcom.vercel.app/hotels/${id}`))
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/contact',
        element:<Contact></Contact>
    },
    {
        path:"/blog",
        element:<Blog></Blog>
    },
    {
        path:"/news",
        element:<News></News>
    }
])

export default router;