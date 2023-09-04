import NavWithSearch from "../shared/NavWithSearch"
import { Outlet } from "react-router-dom"
const MainLayout = () => {
  return (
    <div className="bg-image">
       <div className="overlay">
       <NavWithSearch></NavWithSearch>
        <Outlet></Outlet>
       </div>
    </div>
  )
}

export default MainLayout