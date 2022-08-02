import RestaurantCard from '../components/RestaurantCard'

const RestaurantList = ({ restaurants }) => {
  return (
    <section className="page" id="restaurant-list">
      <h3>Restaurants</h3>
      <div className="flex">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </section>
  )
}

export default RestaurantList
