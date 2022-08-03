const ReviewCard = ({ review, editReview, deleteReview, index }) => {

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
        <button onClick={() => deleteReview(review._id, index)}>X</button>
        <h3>{emojiRating}<span>{grayEmojis}</span></h3>
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
