const ReviewCard = ({ review, deleteReview, index }) => {

  return (
    <div className="review-card">
      <h4>{review.title}</h4>
      <p>{review.body}</p>
      <h4>{review.name}</h4>
      <h3>{review.rating}</h3>
      <button onClick={() => deleteReview(review._id, index)}>X</button>
    </div>
  )
}

export default ReviewCard
