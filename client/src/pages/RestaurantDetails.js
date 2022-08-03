const RestaurantDetails = ({ selectedRestaurant }) => {

  return (
    <section className="page">
      <h1>{selectedRestaurant.name}</h1>
      <img src={selectedRestaurant.photo_url} alt={selectedRestaurant.name} />
      <h1>{selectedRestaurant.location}</h1>
    </section>
  )
}

export default RestaurantDetails
