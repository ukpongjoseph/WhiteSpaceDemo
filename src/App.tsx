import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <div>
          Hello, This is just the bootstrap of the skeleton of the whitespace demo project
          <Nav message="Welcome to the Nav component!" />
          <Hero message="Welcome to the Hero component!" />
      </div>
    </>
  )
}

export default App
