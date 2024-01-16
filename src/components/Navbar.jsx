import {Navlink} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container navbar-container'>
        <h2 className='navbar-title'>THE PLANETS</h2>
        <div className='planets'>
          <ul className='navbar-planets-name'>
            <li className='planet-name'>
              <Navlink
                 to="/"
                 className={({isActive})=>{
                  isActive ? "active" : ""
                 }}
                 >
                  mercury
                 </Navlink>
            </li>
            <li className='planet-name'>venus</li>
            <li className='planet-name'>earth</li>
            <li className='planet-name'>mars</li>
            <li className='planet-name'>jupiter</li>
            <li className='planet-name'>saturn</li>
            <li className='planet-name'>uranus</li>
            <li className='planet-name'>neptune</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar