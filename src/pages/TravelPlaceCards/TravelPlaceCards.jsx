import { useEffect, useState } from "react";
import TravelPlaceCard from "./TravelPlaceCard";
import { useContext } from "react";
import { userContext } from "../../providers/AuthProvider";
const TravelPlaceCards = ({travelPlaces}) => {
  return (
    <div className="flex-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {travelPlaces.map((place) => (
        <TravelPlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default TravelPlaceCards;
