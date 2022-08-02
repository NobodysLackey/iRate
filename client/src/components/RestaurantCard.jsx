const RestaurantCard = ({ restaurant }) => {

  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <h5>{restaurant.location}</h5>
    </div>
  )
}

export default RestaurantCard
