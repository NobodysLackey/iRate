import { useState } from 'react'
import Loader from '../components/Loader'
import ReviewCard from '../components/ReviewCard'

const RestaurantDetails = ({
  selectedRestaurant,
  editReview,
  deleteReview,
  newReview,
  user
}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <section className="page">
      {!selectedRestaurant ? (
        <div>
          <h1>Oops! Restaurant Details Not Found!</h1>
        </div>
      ) : (
        <div>
          <div className="details">
            <h1 className="title">{selectedRestaurant.name}</h1>
            {isLoading && <Loader />}
            <img
              src={selectedRestaurant.photo_url}
              alt={selectedRestaurant.name}
              onLoad={() => setIsLoading(false)}
            />
            <h1>
              {selectedRestaurant.city}, {selectedRestaurant.state}
            </h1>
          </div>
          <div className="reviews">
            <h1 className="title">Reviews</h1>
            {selectedRestaurant.reviews.length === 0 ? (
              <div>
                <h3 className="no-reviews">No Reviews Yet!</h3>
                {user ? (
                  <button onClick={newReview}>Write A Review</button>
                ) : null}
              </div>
            ) : (
              <div>
                {user ? (
                  <button onClick={newReview}>Write A Review</button>
                ) : null}
                <div className="reviews-flex">
                  {selectedRestaurant.reviews?.map((review, index) => (
                    <ReviewCard
                      key={review._id}
                      review={review}
                      deleteReview={deleteReview}
                      editReview={editReview}
                      index={index}
                      user={user}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default RestaurantDetails
