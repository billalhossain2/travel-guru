import { useEffect, useState } from "react";
import TravelPlaceCard from "./TravelPlaceCard";
const TravelPlaceCards = () => {
  const [travelPlaces, setTravelPlaces] = useState([]);
  const [error, setError] = useState("");

  const loadTravelPlaces = async () => {
    try {
      const res = await fetch(`data/spots.json`);
      const data = await res.json();
      setTravelPlaces(data);
    } catch (error) {
        setError(error)
    }
  };

  useEffect(() => loadTravelPlaces, []);
  return (
    <div className="flex-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {
        travelPlaces.map(place => <TravelPlaceCard key={place.id} place={place}/>)
      }
    </div>
  );
};

export default TravelPlaceCards;