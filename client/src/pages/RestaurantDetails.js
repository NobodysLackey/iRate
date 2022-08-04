import ReviewCard from '../components/ReviewCard'

const RestaurantDetails = ({ selectedRestaurant, editReview, deleteReview, newReview }) => {

  return (
    <section className="page">
      {!selectedRestaurant ? (
        <div>
          <h1>Oops! Restaurant Details Not Found!</h1>
        </div>
        ) : (
        <div>
          <div className="details">
            <h1 className='title'>{selectedRestaurant.name}</h1>
            <img src={selectedRestaurant.photo_url} alt={selectedRestaurant.name} />
            <h1>{selectedRestaurant.location}</h1>
          </div>
          <div className="reviews">
            <h1 className='title'>Reviews</h1>
            {(selectedRestaurant.reviews.length === 0) ? (
              <div>
                <h3 className='no-reviews'>No Reviews Yet!</h3>
                <button onClick={newReview}>Write A Review</button>
              </div>
              ):(
              <div>
                <button onClick={newReview}>Write A Review</button>
                {selectedRestaurant.reviews.map((review, index) => (
                  <ReviewCard
                    key={review._id}
                    review={review}
                    deleteReview={deleteReview}
                    editReview={editReview}
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
