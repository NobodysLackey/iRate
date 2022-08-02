import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </main>
    </div>
  )
}

export default App
