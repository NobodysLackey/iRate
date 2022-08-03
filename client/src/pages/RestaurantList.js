import RestaurantCard from '../components/RestaurantCard'

const RestaurantList = ({ restaurants, chooseRestaurant }) => {
  
  return (
    <section className="page" id="restaurant-list">
      <div className="flex">
        {restaurants.map((restaurant) => (
          <div onClick={() => chooseRestaurant(restaurant)} key={restaurant._id}>
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default RestaurantList
