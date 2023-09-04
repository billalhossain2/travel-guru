import React from "react";

const Hotel = ({hotel:{hotel_name, image_url, price_per_night, amenities, cancellation_policy, rating, room_details:{bathrooms, bedrooms, beds, max_guests}}}) => {
    console.log(hotel_name)
  return (
    <div class="card card-side flex lg:flex-row md:flex-row flex-col items-center">
      <figure>
        <div>
          <img
            className="lg:w-[300px] w-[100%]"
            src={image_url}
            alt="Movie"
          />
        </div>
      </figure>
      <div class="card-body">
        <h2 class="card-title font-medium text-[18px]">
          {hotel_name}
        </h2>
        <p>{max_guests} guests {bedrooms} bedrooms {beds} beds {bathrooms} baths</p>
        <p>
            {
                amenities.map(amenity => <span> {amenity} </span>)
            }
        </p>
        <p>{cancellation_policy}</p>
        <p><i class="fa-solid fa-star text-[#FFAF38] me-2 text-[14px]"></i><span className="me-5">{rating}</span> <span>{price_per_night}</span></p>
      </div>
    </div>
  );
};

export default Hotel;
