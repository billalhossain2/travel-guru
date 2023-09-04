import React from "react";
import Hotel from "./Hotel";
import Navbar from "../shared/Navbar";
import { useLoaderData } from "react-router-dom";
import Map from "../../Map";
const Hotels = () => {
  const {availability:{total_stays, date_range, max_guests}, location, hotels} = useLoaderData();
  console.log(useLoaderData())
  return (
    <>
    <Navbar></Navbar>
    <hr />
    <div className="mb-20">
      <div className="my-5">
      <p>{total_stays} stays {date_range} {max_guests} guests</p>
      <h1 className="font-bold text-2xl">Stay in {location}</h1>
      </div>
    <div className="flex lg:flex-row flex-col gap-5">
      <div className="space-y-5">
        {
          hotels.map((hotel, index) => <Hotel key={index} hotel={hotel}/>)
        }
      </div>
      <div className="lg:w-[550px] w-[100%]">
        <Map></Map>
      </div>
    </div>
    </div>
    </>
  );
};

export default Hotels;
