import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData?.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Rating: {avgRating}</h3>
      <h4>COST FOR TWO {costForTwo / 100}</h4>
      <h4>{lastMileTravelString} away</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
