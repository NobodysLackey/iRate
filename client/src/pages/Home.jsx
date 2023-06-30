const Home = ({ toggleEmoji, anger }) => {

  return (
    <section className="page home">
      <h1>Welcome to</h1>
      <h1 id="home-logo">iRate</h1>
      <span id="emoji" onClick={toggleEmoji}>{anger}</span>
      <h1>This place is the worst!</h1>
    </section>
  )
}

export default Home
