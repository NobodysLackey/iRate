import { useLocation } from "react-router-dom"

const ReviewForm = ({ handleChange, handleSubmit, formState }) => {
  let location = useLocation()

  return (
    <section className="page">
      <h1>Review Form</h1>
      <form onSubmit={(e) => handleSubmit(e, location.state.index)} className="review-form">
        <input value={formState.title} type="text" name="title" placeholder="Review Title" onChange={handleChange} required />
        <input value={formState.body} type="text" name="body" placeholder="Your Review" onChange={handleChange} required />
        <input value={formState.name} type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <select defaultValue={formState.rating} name="rating" onChange={handleChange} required>
          {/* <optgroup label="Rating"> */}
            <option value="" disabled hidden>Rating</option>
            <option value={1} >1</option>
            <option value={2} >2</option>
            <option value={3} >3</option>
            <option value={4} >4</option>
            <option value={5} >5</option>
          {/* </optgroup> */}
        </select>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default ReviewForm
