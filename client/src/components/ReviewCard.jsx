const ReviewCard = ({ review, editReview, deleteReview, index }) => {

  return (
    <div className="review-card">
      <div className="review-top">
        <h4>{review.title}</h4>
        <button onClick={() => deleteReview(review._id, index)}>X</button>
        <h3>{review.rating} / 5</h3>
      </div>
      <p>{review.body}</p>
      <div className="review-bottom">
        <h4>{review.name}</h4>
        <button onClick={() => editReview(review, index)}>Edit</button>
      </div>
    </div>
  )
}

export default ReviewCard
