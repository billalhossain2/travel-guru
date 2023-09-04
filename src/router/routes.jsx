import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../pages/layouts/MainLayout";
import Booking from "../pages/Booking";
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
                element:<Booking></Booking>
            }
        ]
    }
])

export default router;