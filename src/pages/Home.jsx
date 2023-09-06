import TravelPlaceCards from "./TravelPlaceCards/TravelPlaceCards";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  useTitle("Home");
  const [travelPlaces, setTravelPlaces] = useState([]);
  const [error, setError] = useState("");

  const loadTravelPlaces = async () => {
    try {
      const res = await fetch(
        `https://travel-guru-server-billalbelal621-gmailcom.vercel.app/spots`
      );
      const data = await res.json();
      setTravelPlaces(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => loadTravelPlaces, []);
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
      <TravelPlaceCards travelPlaces={travelPlaces}></TravelPlaceCards>
    </div>
  );
};

export default Home;
