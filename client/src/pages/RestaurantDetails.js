import { Link } from 'react-router-dom'

import ReviewCard from '../components/ReviewCard'

const RestaurantDetails = ({ selectedRestaurant, deleteReview }) => {

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
            <h1>Reviews</h1>
            <Link to={`/restaurants/${selectedRestaurant._id}/review`} >Write A Review</Link>
            {(selectedRestaurant.reviews.length === 0) ? (
              <h3>No Reviews Yet!</h3>
              ):(
              <div>
                {selectedRestaurant.reviews.map((review, index) => (
                  <ReviewCard
                    key={review._id}
                    review={review}
                    deleteReview={deleteReview}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default RestaurantDetails
