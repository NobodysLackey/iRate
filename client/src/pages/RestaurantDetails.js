import ReviewCard from '../components/ReviewCard'

const RestaurantDetails = ({ selectedRestaurant }) => {

  return (
    <section className="page">
      {!selectedRestaurant ? (
        <div>
          <h1>Oops! Restaurant Details Not Found!</h1>
        </div>
        ) : (
        <div>
          <h1>{selectedRestaurant.name}</h1>
          <img src={selectedRestaurant.photo_url} alt={selectedRestaurant.name} />
          <h1>{selectedRestaurant.location}</h1>
          <div className="reviews">
            {selectedRestaurant.reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default RestaurantDetails
