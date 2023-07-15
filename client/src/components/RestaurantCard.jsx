const RestaurantCard = ({ restaurant }) => {

  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <h5>{restaurant.city}, {restaurant.state}</h5>
    </div>
  )
}

export default RestaurantCard
