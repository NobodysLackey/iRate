const ReviewCard = ({ review, editReview, deleteReview, index, user }) => {

  let emojiRating
  let grayEmojis

  const getEmojiRating = () => {
    switch(review.rating) {
      case 5:
        emojiRating = "🤤🤤🤤🤤🤤"
        grayEmojis = ""
        break
      case 4:
        emojiRating = "🙂🙂🙂🙂"
        grayEmojis = "😐"
        break
      case 3:
        emojiRating = "😠😠😠"
        grayEmojis="😐😐"
        break
      case 2:
        emojiRating = "😡😡"
        grayEmojis="😐😐😐"
        break
      case 1:
        emojiRating = "🤬"
        grayEmojis="😐😐😐😐"
        break
      default:
        emojiRating = "🤬"
        grayEmojis="😐😐😐😐"
    }
  }
  getEmojiRating()

  return (
    <div className="review-card">
      <div className="review-top">
        <h4>{review.title}</h4>
        {user && user.firstName === review.name ? <button onClick={() => deleteReview(review._id, index)}>X</button> : null}
        <h3>{emojiRating}<span>{grayEmojis}</span></h3>
      </div>
      <p>{review.body}</p>
      <div className="review-bottom">
        <h4>{review.name}</h4>
        {user && user.firstName === review.name ? <button onClick={() => editReview(review, index)}>Edit</button> : null}
      </div>
    </div>
  )
}

export default ReviewCard
