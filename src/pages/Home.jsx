import TravelPlaceCards from "./TravelPlaceCards/TravelPlaceCards";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";

const Home = () => {
  useTitle("Home");
  
  return (
    <div className="flex lg:flex-row flex-col gap-5 max-w-[90%] mx-auto h-screen mt-20">
      <div className="max-w-[400px] text-white space-y-3">
        <h1 className="text-6xl font-bold">Cox's bazar</h1>
        <p className="text-[16px]">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button className="btn normal-case bg-[#F9A51A] hover:bg-[#F9A51A] border-0">
          <Link to="/booking/1">
            <span>Booking</span>
          </Link>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {/* travelcards  */}
      <TravelPlaceCards></TravelPlaceCards>
    </div>
  );
};

export default Home;
