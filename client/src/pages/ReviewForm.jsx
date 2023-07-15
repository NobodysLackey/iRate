import { useLocation } from 'react-router-dom'

const ReviewForm = ({ handleChange, handleSubmit, formState }) => {
  let location = useLocation()

  let locationIndex = location.state ? location.state.index : 'No'

  return (
    <section className="page">
      <h1 className="title">Review Form</h1>
      <form
        onSubmit={(e) => handleSubmit(e, locationIndex)}
        className="review-form"
        autoComplete="off"
      >
        <div>
          <input
            value={formState.title}
            type="text"
            name="title"
            placeholder="Review Title"
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <textarea
          maxlength='250'
          columns="50"
          rows="5"
          value={formState.body}
          type="text"
          name="body"
          placeholder="Your Review"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <select
          defaultValue={formState.rating}
          name="rating"
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            {' '}
            Rating &gt;{' '}
          </option>
          <option value={1}>🤬</option>
          <option value={2}>😡</option>
          <option value={3}>😠</option>
          <option value={4}>🙂</option>
          <option value={5}>🤤</option>
        </select>
        <button type="submit">Rate</button>
      </form>
    </section>
  )
}

export default ReviewForm
