import { Link } from "react-router-dom";

const TravelPlaceCard = ({ place: { id, destination, image_url } }) => {
  return (
    <Link to={`/booking/${id}`}>
      <div className="h-[300px] flex flex-col justify-between relative cursor-pointer ">
        <img
          className="h-[100%] rounded-lg"
          src={image_url}
          alt="travel image"
        />
        <div className="footer absolute bottom-10 left-2">
          <h3 className="text-3xl font-bold text-white">{destination}</h3>
        </div>
      </div>
    </Link>
  );
};

export default TravelPlaceCard;
