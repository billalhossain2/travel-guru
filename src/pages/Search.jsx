import React from "react";
import bg from "../assets/bg.png";
const Search = () => {
  return (
    <div>
      <p>252 stays Apr 13-17 3 guests</p>
      <h1 className="font-bold text-2xl">Stay in Cox’s Bazar</h1>
    <div className="flex lg:flex-row flex-col gap-5">
      <div>
        <div class="card card-side flex lg:flex-row md:flex-row flex-col items-center">
          <figure>
            <div>
              <img className="lg:w-[300px] w-[100%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROv7eLpZKhhApWGiPclPANIKltIOVgIGtoeg&usqp=CAU" alt="Movie" />
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title font-medium text-[18px]">
              Light bright airy stylish apt & safe peaceful stay
            </h2>
            <p>4 guests   2 bedrooms   2 beds   2 baths</p>
            <p>Wif Air conditioning Kitchen</p>
            <p>Cancellation fexibility availiable</p>
            <p>Ratings: 4.9 (20) Price: $34</p>
          </div>
        </div>
      </div>
      <div className="map max-w-[500px]">
        <img src={bg} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Search;
