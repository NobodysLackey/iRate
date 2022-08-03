const ReviewCard = ({ review }) => {

  return (
    <div className="review-card">
      <h4>{review.title}</h4>
      <p>{review.body}</p>
      <h4>{review.name}</h4>
      <h3>{review.rating}</h3>
    </div>
  )
}

export default ReviewCard
