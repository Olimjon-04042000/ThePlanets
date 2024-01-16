import AboutPlanet from "./components/AboutPlanet"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import "./index.css"

export const App = () => {
  return (
    <div>
      <Navbar />
      <hr className="line" />
      <AboutPlanet />
      <Footer />
    </div>
  )
}
export default App
