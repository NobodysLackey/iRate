const RestaurantCard = ({ restaurant }) => {

  return (
    <span className="restaurant-card">
      <h4>{restaurant.name}</h4>
      <h5>{restaurant.location}</h5>
    </span>
  )
}

export default RestaurantCard
